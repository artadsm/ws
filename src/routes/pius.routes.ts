import { Router } from "express";
import Piu from "../models/Pius";
import PiusRepository from "../repositories/PiusRepository";
const piusRouter = Router();

const piusRepository = new PiusRepository();

piusRouter.get("/", (req, res) => {
  const pius = piusRepository.all();
  return res.json(pius);
});
piusRouter.get("/:id", (req, res) => {
  try {
    const id = req.params.id;
    const piu = piusRepository.specific(id);
    return res.json(piu);
  } catch (err) {
    if (err instanceof Error)
      return res.status(400).json({ error: err.message });
  }
});
piusRouter.patch("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body as Partial<Piu>;
    const update = piusRepository.changePiu({
      ...data,
      id,
    });
    return res.json(update);
  } catch (err) {
    if (err instanceof Error)
      return res.status(400).json({ error: err.message });
  }
});
piusRouter.post("/:userId", (req, res) => {
  try {
    const { text } = req.body;
    const userId = req.params.userId;
    const piu = piusRepository.createPiu(userId, text);
    return res.status(201).json(piu);
  } catch (err) {
    if (err instanceof Error)
      return res.status(400).json({ error: err.message });
  }
});
piusRouter.delete("/:id", (req, res) => {
  try {
    const id = req.params.id;
    piusRepository.deletePiu(id);
    return res.status(204).json();
  } catch (err) {
    if (err instanceof Error)
      return res.status(400).json({ error: err.message });
  }
});

export default piusRouter;
