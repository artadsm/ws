import { uuid } from "uuidv4";

class Piu {
    
    userId: string;
    id:string;
    text: string;
    creationDate: Date;
    updateDate: Date;

    constructor(userId: string,text:string) {
        
        this.userId = userId;
        this.id = uuid();
        this.text=text;
        this.creationDate = new Date();
        this.updateDate = new Date();
    }
}

export default Piu;