var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
var User = /** @class */ (function () {
    function User(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    User.prototype.getInfo = function () {
        return "".concat(this.name) + " " + "".concat(this.email) + " " + "".concat(this.role);
    };
    User.prototype.isAdmin = function () {
        if (Role.ADMIN === 1) {
            console.log("Admin");
        }
        else if (Role.USER === 2) {
            console.log("User");
        }
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    return User;
}());
var username = new User("Quyet", "phamquyet9688", Role.USER);
console.log(username.getInfo());
username.isAdmin();
console.log(username);
