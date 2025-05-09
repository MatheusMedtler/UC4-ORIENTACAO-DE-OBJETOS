import { Aluno } from "./Aluno"

export class Avaliacao{
    private aluno:Aluno
    private data:number
    private peso:number
    private altura:number
    private imc:number
    private observacoes:string

    
   public constructor(nome:Aluno,data:number,peso:number,altura:number,imc:number,observacoes:string){
    this.data = data
    this.peso = peso
    this.altura = altura
    this.imc = imc
    this.observacoes = observacoes
}

public CalcularIMC():number{
    let IMC:number= this.peso/this.altura*2
    return IMC;
}

public gerarRelatorio(): string {
    return `
    Aluno: ${this.aluno}
    Data: ${this.data}
    Peso: ${this.peso} kg
    Altura: ${this.altura} 
    IMC: ${this.imc}
    Observações: ${this.observacoes}
    `;
}
}