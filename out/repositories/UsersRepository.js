"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = __importDefault(require("../models/Users"));
class UsersRepository {
    constructor() {
        this.users = [];
    }
    specific(id) {
        const user = this.users.find((user) => user.id === id);
        if (!user)
            throw Error("User not found");
        return user;
    }
    all() {
        return this.users;
    }
    changeUser(data) {
        const user = this.users.find((user) => user.id === data.id);
        if (!user)
            throw Error("User not found");
        this.validateUser(user);
        const updated = Object.assign(Object.assign({}, user), data);
        this.users[this.users.findIndex((user) => user.id === data.id)] = updated;
        return updated;
    }
    deleteUser() {
    }
    validateUser(data) {
        if (!data.name)
            throw Error("Nome não pode ser vazio");
        if (!data.birth)
            throw Error("Data de nascimento não pode ser vazia");
        if (!data.cpf)
            throw Error("CPF não pode ser vazio");
        if (!data.phoneNumber)
            throw Error("Número de telefone não pode ser vazio");
        console.log({ id: data.id, cpf: data.cpf, data: "data" });
        const userExists = this.users.find((user) => user.cpf === data.cpf);
        if (userExists && userExists.id !== data.id)
            throw Error("Esse cpf já está sendo utilizado");
        const nameExists = this.users.find((user) => user.name === data.name);
        if (nameExists && nameExists.id !== data.id)
            throw Error("Esse nome já está sendo utilizado");
    }
    createUser(name, birth, cpf, phoneNumber) {
        const user = new Users_1.default(name, birth, cpf, phoneNumber);
        this.validateUser(user);
        this.users.push(user);
        return user;
    }
}
exports.default = UsersRepository;
//# sourceMappingURL=UsersRepository.js.map