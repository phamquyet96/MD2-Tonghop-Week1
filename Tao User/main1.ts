import {Staff} from "./Staff";
import {StaffManager} from "./StaffManager";
let staff1 = new Staff('hungcoi', 'hungcoi@gmail.com','1234');
let staff2 = new Staff('ngocanh', 'ngocanh@gmail.com','3456');

let staffManager = new StaffManager();
staffManager.add(staff1);
staffManager.add(staff2);

console.table(staffManager.display())
// console.table(staffManager.checkAccount('luan@gmail.com','1234'))