"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersRepository_1 = __importDefault(require("../repositories/UsersRepository"));
const usersRouter = (0, express_1.Router)();
const usersRepository = new UsersRepository_1.default();
usersRouter.get('/', (req, res) => {
    const users = usersRepository.all();
    return res.json(users);
});
usersRouter.get("/:id", (req, res) => {
    try {
        const id = req.params.id;
        const user = usersRepository.specific(id);
        return res.json(user);
    }
    catch (err) {
        if (err instanceof Error)
            return res.status(404).json({ error: err.message });
    }
});
usersRouter.patch('/:id', (req, res) => {
    try {
        const data = req.body;
        const update = usersRepository.changeUser(Object.assign(Object.assign({}, data), { id: req.params.id }));
        return res.json(update);
    }
    catch (err) {
        if (err instanceof Error)
            return res.status(400).json({ error: err.message });
    }
});
usersRouter.post('/', (req, res) => {
    try {
        const { name, birth, cpf, phoneNumber } = req.body;
        const user = usersRepository.createUser(name, birth, cpf, phoneNumber);
        return res.json(user);
    }
    catch (err) {
        if (err instanceof Error)
            return res.status(400).json({ error: err.message });
    }
});
exports.default = usersRouter;
//# sourceMappingURL=users.routes.js.map