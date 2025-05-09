import { Animal } from "./Abstracao"

class Cachorro extends Animal{
    FazerBarulho():void{
        console.log(`${this.nome} faz: AU AU`)
    }
}
let myDOG = new Cachorro ("Kadu")
myDOG.FazerBarulho()