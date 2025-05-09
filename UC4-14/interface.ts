

interface Animal {
    nome:string;
    emitirSom():void;
}

interface voador{
    voar():void
}

interface nadar{
    nadar():void
}

class Cachorro implements Animal{
    nome:string

    constructor(nomeConst:string){
        this.nome = nomeConst
    }

     emitirSom(): void {
    console.log(`${this.nome} AUAU`)
    }
}

class pato implements Animal,voador,nadar{
    nome:string

    constructor(nomeConst:string){
        this.nome = nomeConst
    }

     emitirSom(): void {
    console.log(`${this.nome} HNHAK HNHAK`)
    }

    voar():void{
        console.log(`${this.nome} esta voando`)
    }

    nadar():void{
        console.log(`${this.nome} esta nadando`)

    }
}

let myDuck = new pato ("Alexandre")
myDuck.emitirSom()
myDuck.nadar()
myDuck.voar()


interface lista <T> {
    adicionar(item:T):void;
    remover(item:T):void;
    tamanho():number;
}

class ListaNumerica implements lista <number> {
    private items:number[] = [] 
    adicionar(item: number): void {
        this.items.push(item)
    }
    remover(item: number): void {
        const index = this.items.indexOf(item)
        if(index !== -1){
            this.items.splice(index,1)
        }
    }
    tamanho(): number {
        return this.items.length
    }
}

let myList = new ListaNumerica()
myList.adicionar(5)
myList.remover(2)
console.log(myList.tamanho())