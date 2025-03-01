
export class Cat{
    //Atributos
     name:string; 
     weight:number;

    //construtor
    constructor(nameCat:string,weightCat:number){
        this.name = nameCat;
        this.weight = weightCat;
    }

    //Metodos

    meow():void{
        console.log("Meow meow")
    }

    eat(quantity:number):void{
        console.log("the cats has eaten" + quantity)
    }
}

const meuGato = new Cat("Lucky",10.0)
meuGato.meow();
meuGato.eat(200);