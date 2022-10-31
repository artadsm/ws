import { Router } from "express";
import User from '../models/Users';
import UsersRepository from "../repositories/UsersRepository";


const usersRouter = Router();

export const usersRepository = new UsersRepository();


usersRouter.get('/', (req,res) => {
    const users = usersRepository.all();
    return res.json(users);
});
usersRouter.get("/:id", (req, res) => {
    try{
    const id = req.params.id;
    const user = usersRepository.specific(id);
    return res.json(user);
    } catch(err) {
        if(err instanceof Error) return res.status(404).json({error : err.message});
    }
});
usersRouter.patch('/:id', (req,res) => {
    try{
        const {id} = req.params;
        const data = req.body as Partial<User>;
        const update = usersRepository.changeUser({
            ...data,
            id
        });
        return res.json(update);
    }catch(err) {
        if (err instanceof Error) return res.status(400).json({ error: err.message });
    }
});
usersRouter.post('/', (req,res) => {
    try{
        const {name, birth,cpf,phoneNumber} = req.body;
        const user = usersRepository.createUser(name,birth,cpf,phoneNumber);
        return res.status(201).json(user);

    } catch(err){
        if(err instanceof Error) return res.status(400).json({ error : err.message});
    }

});
usersRouter.delete("/:id", (req, res) => {
  try {
    const id = req.params.id;
    usersRepository.deleteUser(id);
    return res.status(204).json();
  } catch (err) {
    if (err instanceof Error)
      return res.status(404).json({ error: err.message });
  }
});
export default usersRouter;