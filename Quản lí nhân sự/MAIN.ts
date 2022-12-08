import {EmployeeManager} from "./HumanManager";
import {Employee} from "./HumanResources"

let employee1 = new Employee('Nguyen',"Hung","30/5","ha noi","staff")
let employee2 = new Employee('Mai',"Huong","10/10","nam dinh","staff")
let employee3 = new Employee('Pham',"Quyet","14/12","nam dinh","manager")
let employee4 = new Employee('Do',"Trung","3/7","thai binh","leader")

let manager = new EmployeeManager()
manager.add(employee1)
manager.add(employee2)
manager.add(employee3)
manager.add(employee4)

console.table(manager.display())

manager.Delete("Mai","Huong","3/7")
console.table(manager.display())


