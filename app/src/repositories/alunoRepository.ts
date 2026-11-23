import { database } from "../config/database";

export interface Aluno {
  id: number;
  aluno: string;
  turma: string;
  data_cadastro: Date;
}

export async function cadastrarAluno(
  aluno: string,
  turma: string
): Promise<void> {
  await database.execute(
    "INSERT INTO alunos (aluno, turma) VALUES (?, ?)",
    [aluno, turma]
  );
}

export async function listarAlunos(): Promise<Aluno[]> {
  const [rows] = await database.query(
    "SELECT id, aluno, turma, data_cadastro FROM alunos ORDER BY id ASC"
  );

  return rows as Aluno[];
}