export class EspadaDiamente {
    private dano : number
    private durabilidade : number

    constructor(dano:number,durabilidade:number){
        this.dano = dano
        this.durabilidade = durabilidade
    }


    setTipo(dano:number):void{this.dano = dano };
    SerDurabilidade(durabilidade:number):void{this.durabilidade = durabilidade};

    getTipo():number{
        return this.dano}
    getDurabilidade():number{
        return this.durabilidade}

        ExibirEspada():void{console.log(`A espada de Diamente deu ${this.dano} de dano e durabilidade de ${this.durabilidade}`)}
}


const Espadas = new EspadaDiamente(100,350)
Espadas.ExibirEspada()