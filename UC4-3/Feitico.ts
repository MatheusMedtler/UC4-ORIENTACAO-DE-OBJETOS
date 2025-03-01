export class Feitico{
    private Nome: String;
    private Tipo:  String;
    private Poder: String;

    constructor(Nome: String, Tipo: String, Poder: String){
        this.Nome = Nome;
        this.Tipo = Tipo;
        this.Poder = Poder;
    }

    setNome(NomeFeit:string):void{
            this.Nome=NomeFeit}

    setTipo(tipoFeit:string):void{
        this.Tipo=tipoFeit
    }

    SetPoder(PoderTip:string):void{
        this.Poder=PoderTip
    }

     getNome(){
        return this.Nome
    }
     getTipo(){
        return this.Tipo
    }
    getPoder(){
        return this.Poder
    }

    LancarFeitico():void{
        console.log(`O feitiço ${this.Nome}  do tipo ${this.Tipo} com poder ${this.Poder} foi lançado!`)

}
    
}

const Feitico1 = new Feitico("Espeliarmus","ataque","200")
const Feitico2 = new Feitico ("Lumos","ataque","300")
Feitico1.LancarFeitico()
Feitico2.LancarFeitico()

