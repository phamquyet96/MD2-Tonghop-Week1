"use strict";
exports.__esModule = true;
var Staff_1 = require("./Staff");
var StaffManager_1 = require("./StaffManager");
var staff1 = new Staff_1.Staff('hungcoi', 'hungcoi@gmail.com', '1234');
var staff2 = new Staff_1.Staff('ngocanh', 'ngocanh@gmail.com', '3456');
var staffManager = new StaffManager_1.StaffManager();
staffManager.add(staff1);
staffManager.add(staff2);
console.table(staffManager.display());
// console.table(staffManager.checkAccount('luan@gmail.com','1234'))
