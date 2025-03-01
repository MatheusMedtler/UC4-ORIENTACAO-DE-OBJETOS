export class Cat{
    //Atributos
    private name:string; 
    private weight:number;

    //construtor
    /*constructor(nameCat:string,weightCat:number){
        this.name = nameCat;
        this.weight = weightCat;
    }*/

    //Metodos
    setname(nameCat:string):void{
        this.name=nameCat;
    }
    meow():void{
        console.log("Meow meow")
    }

    eat(quantity:number):void{
        console.log("the cats has eaten" + quantity)
    }
}

const meuGato = new Cat()
meuGato.setname("Daeny")
meuGato.meow();
meuGato.eat(200);