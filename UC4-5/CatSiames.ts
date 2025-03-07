import { cat } from "./cat";


export class CatSiames extends cat{
 public ShowRaceSiames():string{
    return this.showRace();
}
}


let MeuGato = new CatSiames ("Cafezinho","Listradinho",5)