class Staff {
    private userName: string;
    public email: string;
    public passWord: String;

    constructor(userName: string, email: string, passWord: string) {
        this.userName = userName;
        this.email = email;
        this.passWord = passWord;
    }

    getUserName(): string {
        return this.userName
    }
    getEmail(): string {
        return this.email
    }
    getPassWord(): any {
        return this.passWord
    }
}

class StaffManager {
    Staffs: Staff[] = []
    constructor() {

    }

    addStaff() {
        let name: string = readlineSync.question('Nhap ten: ')
        let email: string = readlineSync.question('Nhap email: ')
        let password: string = readlineSync.question('Nhap password: ')
        let arr = new Staff(name, email, password)
        this.Staffs.push(arr)
    }

    addStaffFirst(arr: Staff) {
        this.Staffs.push(arr)
    }

    showListStaff() {
        return this.Staffs
    }

    checkAccount(email: string, passWord: string) {
        for (let i = 0; i < this.Staffs.length; i++) {
            if ((email == this.Staffs[i].getEmail()) && passWord == this.Staffs[i].getPassWord()) {
                return true;
            }
        }
        return false;
    }

    deleteAccount() {
        let email = readlineSync.question('Nhap thong tin nguoi can xoa [email]: ')
        for (let i = 0; i < this.Staffs.length; i++) {
            if (email == this.Staffs[i].email) {
                this.Staffs.splice(i, 1)
            }
        }
    }
}



let Staffmanager = new StaffManager()



let readlineSync = require('readline-sync');

let login = () => {
    console.log('---Dang nhap---')
    let loginEmail = readlineSync.question('Nhap email: ');
    let loginPassword = readlineSync.question('Nhap password: ')
    for (let i = 0; i < Staffmanager.Staffs.length; i++) {
        if (loginEmail == Staffmanager.Staffs[i].email && loginPassword == Staffmanager.Staffs[i].passWord) {
            menu();
        }
    }
}

let menuMain = () => {
    let isLoop: boolean = true;
    while (isLoop) {
        console.log('1. Dang nhap');
        console.log('2. Thoat');
        let choice = +readlineSync.question('Nhap lua chon: ');
        switch (choice) {
            case 1:
                login();
                break;
            case 2:
                isLoop = false;
                break;
        }
    }
}


let menu = () => {
    let exit: boolean = true;

    while (exit) {
        console.log('1: Danh sach nguoi dung')
        console.log('2: Them nguoi dung')
        console.log('3: Xoa nguoi dung')
        console.log('4: Thoat')
        let menuOption = readlineSync.question('Nhap lua chon: ')
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
}

let user1 = new Staff("hungnkb", "hungnkb@gmail.com", "123")
let user2 = new Staff("hungnkb2", "hungnkb2@gmail.com", "123")
Staffmanager.Staffs.push(user1)
Staffmanager.Staffs.push(user2)

menuMain()


