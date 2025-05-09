import { Animal } from "./Abstracao" 


class Gato extends Animal{
    FazerBarulho():void{
        console.log(`${this.nome} faz: MIAUUU`)
    }
}
let myCat= new Gato ("Perola")
myCat.FazerBarulho()