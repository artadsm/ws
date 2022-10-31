"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv4_1 = require("uuidv4");
class User {
    constructor(name, birth, cpf, phoneNumber) {
        this.id = (0, uuidv4_1.uuid)();
        this.name = name;
        this.birth = birth;
        this.cpf = cpf;
        this.phoneNumber = phoneNumber;
        this.creationDate = new Date();
        this.updateDate = new Date();
    }
}
exports.default = User;
//# sourceMappingURL=Users.js.map