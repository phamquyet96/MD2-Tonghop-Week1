var Staff = /** @class */ (function () {
    function Staff(userName, email, passWord) {
        this.userName = userName;
        this.email = email;
        this.passWord = passWord;
    }
    Staff.prototype.getUserName = function () {
        return this.userName;
    };
    Staff.prototype.getEmail = function () {
        return this.email;
    };
    Staff.prototype.getPassWord = function () {
        return this.passWord;
    };
    return Staff;
}());
var StaffManager = /** @class */ (function () {
    function StaffManager() {
        this.Staffs = [];
    }
    StaffManager.prototype.addStaff = function () {
        var name = readlineSync.question('Nhap ten: ');
        var email = readlineSync.question('Nhap email: ');
        var password = readlineSync.question('Nhap password: ');
        var arr = new Staff(name, email, password);
        this.Staffs.push(arr);
    };
    StaffManager.prototype.addStaffFirst = function (arr) {
        this.Staffs.push(arr);
    };
    StaffManager.prototype.showListStaff = function () {
        return this.Staffs;
    };
    StaffManager.prototype.checkAccount = function (email, passWord) {
        for (var i = 0; i < this.Staffs.length; i++) {
            if ((email == this.Staffs[i].getEmail()) && passWord == this.Staffs[i].getPassWord()) {
                return true;
            }
        }
        return false;
    };
    StaffManager.prototype.deleteAccount = function () {
        var email = readlineSync.question('Nhap thong tin nguoi can xoa [email]: ');
        for (var i = 0; i < this.Staffs.length; i++) {
            if (email == this.Staffs[i].email) {
                this.Staffs.splice(i, 1);
            }
        }
    };
    return StaffManager;
}());
var Staffmanager = new StaffManager();
var readlineSync = require('readline-sync');
var login = function () {
    console.log('---Dang nhap---');
    var loginEmail = readlineSync.question('Nhap email: ');
    var loginPassword = readlineSync.question('Nhap password: ');
    console.log(Staffmanager.Staffs);
    for (var i = 0; i < Staffmanager.Staffs.length; i++) {
        if (loginEmail == Staffmanager.Staffs[i].email && loginPassword == Staffmanager.Staffs[i].passWord) {
            // console.log(123)
            menu();
        }
    }
};
var menuMain = function () {
    var isLoop = true;
    while (isLoop) {
        console.log('1. Dang nhap');
        console.log('2. Thoat');
        var choice = +readlineSync.question('Nhap lua chon: ');
        switch (choice) {
            case 1:
                login();
                break;
            case 2:
                isLoop = false;
                break;
        }
    }
};
var menu = function () {
    var exit = true;
    while (exit) {
        console.log('1: Danh sach nguoi dung');
        console.log('2: Them nguoi dung');
        console.log('3: Xoa nguoi dung');
        console.log('4: Thoat');
        var menuOption = readlineSync.question('Nhap lua chon: ');
        switch (menuOption) {
            case "1":
                console.log(Staffmanager.showListStaff());
                break;
            case "2":
                Staffmanager.addStaff();
                break;
            case "3":
                Staffmanager.deleteAccount();
                break;
            default:
                exit = false;
        }
    }
};
var user1 = new Staff("hungnkb", "hungnkb@gmail.com", "123");
var user2 = new Staff("hungnkb2", "hungnkb2@gmail.com", "123");
Staffmanager.Staffs.push(user1);
Staffmanager.Staffs.push(user2);
menuMain();
