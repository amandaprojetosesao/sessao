export class Autorizacoes {
  constructor(public nome: string,
              public rg: string,
              public cpf: string,
              public aluno: string,
              public curso: number,
              public serie: number,
              public grauDeParentesco: string
            ){
    nome = this.nome;
    rg = this.rg;
    cpf = this.cpf;
    aluno = this.aluno;
    curso = this.curso;
    serie = this.serie;
    grauDeParentesco = this.grauDeParentesco;
  }
}
