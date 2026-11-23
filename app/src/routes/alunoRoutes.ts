import { Router } from "express";
import { listar, cadastrar } from "../controllers/alunoController";

const router = Router();

router.get("/", listar);
router.post("/", cadastrar);

export default router;