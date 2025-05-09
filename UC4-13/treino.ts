import { Instrutor } from "./Instrutor";
import { Aluno } from "./Aluno";
import { Exercicio } from "./exercicio"

export class Treino {
    private aluno: Aluno;
    private instrutor: Instrutor;
    private exercicios: Exercicio
    
    public constructor(aluno: Aluno, instrutor: Instrutor, exercicios: Exercicio) {
        this.aluno = aluno;
        this.instrutor = instrutor; 
        this.exercicios = exercicios;
    }
}
