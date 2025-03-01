export class BlocoDeMadeira {
    private tipo:string
    private durabilidade:number

    constructor(tipo:string,durabilidade:number){
        this.tipo = tipo
        this.durabilidade = durabilidade
    }


    setTipo(tipo:string):void{this.tipo =tipo };
    SerDurabilidade(durabilidade:number):void{this.durabilidade = durabilidade};

    getTipo():string{
        return this.tipo  }

    getDurabilidade():number{
        return this.durabilidade}

        //Exibir():void{console.log(`O bloco de madeira do tipo: ${this.tipo} e durabilidade de: ${this.durabilidade}`)}
}

//const Bloco = new BlocoDeMadeira("Carvalho",2)
//Bloco.Exibir()
