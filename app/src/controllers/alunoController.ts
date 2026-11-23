import { Request, Response } from "express";
import {
  criarAluno,
  buscarAlunos,
} from "../services/alunoService";

export async function listar(req: Request, res: Response) {
  try {
    const alunos = await buscarAlunos();
    return res.render("index", { alunos, erro: null });
  } catch (error) {
    return res.status(500).send("Erro ao buscar alunos.");
  }
}

export async function cadastrar(req: Request, res: Response) {
  try {
    const { aluno, turma } = req.body;

    await criarAluno(aluno, turma);

    return res.redirect("/");
  } catch (error) {
    const alunos = await buscarAlunos();

    const mensagem =
      error instanceof Error
        ? error.message
        : "Erro ao cadastrar aluno.";

    return res.status(400).render("index", {
      alunos,
      erro: mensagem,
    });
  }
}