import { Feitico } from "../UC4-3/Feitico";
import { CriaturaMagica } from "./CriaturaMagica";

export class Bruxo extends CriaturaMagica{
    nome:string
    varinha:string
    casa:string
    habilidade:string
    poderMagico:number

    constructor(nomeConst:string,tipoConst:string,poderConst:number,varinhaConst:string,casaConst:string,habilidadesConst:string,poderMag:number,nome:string){
        super(nomeConst,tipoConst,poderConst)
        this.nome = nome
        this.varinha = varinhaConst
        this.casa = casaConst
        this.habilidade = habilidadesConst
        this.poderMagico = poderMag
    }

    LancarFeitico(feitico:string):void{
        console.log(`${this.nome} lançou o feitiço com a varinha ${this.varinha}`)
        console.log(`Poder Mágico atual: ${this.poderMagico}`)
    }
}

const Bruxo1 = new Bruxo("Harry Potter","Expelliarmus",100,"Sapugueiro","Grifinoria","Fala com cobra",10,"Bruno")
Bruxo1.LancarFeitico("Expelliarmus")

    


