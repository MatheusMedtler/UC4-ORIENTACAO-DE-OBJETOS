
import { Aluno } from "./Aluno";
import { Instrutor } from "./Instrutor";
import { Exercicio } from "./exercicio";
import { Treino } from "./treino";
import { Avaliacao } from "./avaliacao";

let Aluno1 = new Aluno ("Felipe","ma28314",17,79,170)
console.log(Aluno1)

let Exer= new Exercicio("Legpress",4,10)
console.log(Exer)


let Inst  = new Instrutor ("Felipe","ma284163@gmail.com","Personal Treiner","Possui")
console.log(Inst)

let treino1 = new Treino(Aluno1,Inst,Exer)
 console.log(treino1)

let avalo = new Avaliacao(Aluno1,20102024,70,180,20,"fez corretamente")
console.log(avalo)

Aluno1.CalcularIMC()