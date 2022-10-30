import {uuid} from "uuidv4";

class User{

    id: string;
    name: string;
    birth:string;
    cpf: string;
    phoneNumber: string;
    creationDate: string;
    updateDate: string;

    constructor (name:string , birth:string,cpf:string,phoneNumber:string,creationDate:string,updateDate:string) {
        this.id = uuid();
        this.name = name;
        this.birth = birth;
        this.cpf = cpf;
        this.phoneNumber = phoneNumber;
        this.creationDate = creationDate;
        this.updateDate = updateDate;
    }
}

export default User;