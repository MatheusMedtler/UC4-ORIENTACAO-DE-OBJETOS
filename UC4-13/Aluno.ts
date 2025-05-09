import { Usuario } from "./Usuario"

export class Aluno extends Usuario{
    private idade:number
    private peso: number
    private altura:number

    constructor(nome:string,email:string,idade:number,peso:number,altura:number){
        super(nome,email)
        this.peso = peso
        this.altura = altura
    }


    public CalcularIMC():number{
        let IMC:number = this.peso/this.altura*2
        console.log(`O calculo IMC de ${this.nome} é de ${IMC}`)
        return IMC;
    }
}