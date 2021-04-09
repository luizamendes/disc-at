class Atividade {
  constructor(disciplina, aluno) {
    this.disciplina = disciplina;
    this.aluno = aluno;
    this.id;
    this.nota;
  }

  setNota(nota) {
    this.nota = nota;
  }

  getAluno() {
    return this.aluno;
  }

  getDisciplina() {
    return this.disciplina;
  }
}

module.exports = Atividade;
