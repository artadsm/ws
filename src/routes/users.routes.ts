import { Router } from "express";
import User from '../models/Users';
import UsersRepository from "../repositories/usersRepository";


const usersRouter = Router();

const usersRepository = new UsersRepository();


usersRouter.get('/', (req,res) => {
    const users = usersRepository.all();
    return res.json(users);
})

usersRouter.post('/', (req,res) => {
    const {name, birth,cpf,phoneNumber,creationDate,updateDate} = req.body;
    
    if(!req.body.name) 
      res.status(400).json({message:"Nome não pode ser vazio"});
    if (!req.body.birth)
      res.status(400).json({ message: "Data de nascimento não pode ser vazia" });
    if (!req.body.cpf)
      res.status(400).json({ message: "CPF não pode ser vazio" });
    if (!req.body.phoneNumber)
      res.status(400).json({ message: "Número de telefone não pode ser vazio" });
    if (!req.body.creationDate)
      res.status(400).json({ message: "Data de criação não pode ser vazia" });
    if (!req.body.updateDate)
      res.status(400).json({ message: "Data de atualização não pode ser vazia" });

    const user = usersRepository.create(name,birth,cpf,phoneNumber,creationDate,updateDate);


    return res.json(user);

})

export default usersRouter;