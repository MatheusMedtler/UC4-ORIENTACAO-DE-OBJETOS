import { getJSDocClassTag } from "typescript"

export class ChapeuSeletor{
    private CasaSelect:number = 0
    private soncerina:number = 1
    private corvinal: number = 2
    private lufafa :number = 3
    private grifinoria : number = 4


   Getcasas():number{
     return Math.floor(Math.random()* 4+1)
}
    casaAleatoria():void{
        this.CasaSelect = this.Getcasas();
    
   if(this.CasaSelect === this.soncerina) {
    console.log(`A casa selecionada foi: Soncerina!`)
}


   else if (this.CasaSelect === this.corvinal) {
    console.log("A casa selecionada foi: Corvinal!")}

   else if (this.CasaSelect === this.lufafa) {
    console.log(`A casa selecionada foi Lufafa!`)
   }

   else if(this.CasaSelect === this.grifinoria){
    console.log(`A casa selecionada foi Griifnória`)
   }    
    }
}

const Casa = new ChapeuSeletor();
Casa.casaAleatoria();