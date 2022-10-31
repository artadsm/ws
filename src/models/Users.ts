import {uuid} from "uuidv4";


class User{
    id: string;
    name: string;
    birth:string;
    cpf: string;
    phoneNumber: string;
    creationDate: Date;
    updateDate: Date;

    constructor (name:string , birth:string,cpf:string,phoneNumber:string) {
        this.id = uuid();
        this.name = name;
        this.birth = birth;
        this.cpf = cpf;
        this.phoneNumber = phoneNumber;
        this.creationDate = new Date();
        this.updateDate = new Date();
    }
}

export default User;