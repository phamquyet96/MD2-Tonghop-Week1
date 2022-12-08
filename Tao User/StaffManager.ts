import {Staff} from "./Staff";
export class StaffManager{
    staffs: Staff[] = [];
    showListStaff(): Staff[]{
        return this.staffs;
    }
    display(){
        return this.staffs;
    }

    add(staff: Staff): void {
        this.staffs.push(staff);
    }
    checkAccount(password:string,email:string): boolean{
        for( let i=0;i<this.staffs.length;i++){
            if(this.staffs[i].getEmail() == email&&this.staffs[i].getPassword() == password){
                return true;
            }
        }
        return false;
    }

}

