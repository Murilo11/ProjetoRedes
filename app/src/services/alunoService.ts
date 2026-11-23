import {
  cadastrarAluno,
  listarAlunos,
  Aluno,
} from "../repositories/alunoRepository";

export async function criarAluno(
  aluno: string,
  turma: string
): Promise<void> {
  const nome = aluno.trim();
  const turmaFormatada = turma.trim();

  if (!nome) {
    throw new Error("O nome do aluno é obrigatório.");
  }

  if (!turmaFormatada) {
    throw new Error("A turma é obrigatória.");
  }

  const alunos = await listarAlunos();

  const duplicado = alunos.some(
    (registro) =>
      registro.aluno.toLowerCase() === nome.toLowerCase() &&
      registro.turma.toLowerCase() === turmaFormatada.toLowerCase()
  );

  if (duplicado) {
    throw new Error("Este aluno já está cadastrado nesta turma.");
  }

  await cadastrarAluno(nome, turmaFormatada);
}

export async function buscarAlunos(): Promise<Aluno[]> {
  return await listarAlunos();
}
