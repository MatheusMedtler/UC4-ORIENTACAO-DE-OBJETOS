class PilhaPratos <T>{
    private prato: T[] = []

    AdicionarPrato(item:T):void{
        this.prato.push(item)
        console.log(`${this.prato} foi adicionado! `)
    }

    RetirarPrato(): T | undefined {
        const item = this.prato.pop();
        console.log(`Prato retirado: ${item}`);
        return item;
    }
    
    isEmpty():boolean{
        return this.prato.length === 0
    }

    Tamanho():number{
        return this.prato.length
    }
    

   

    /*
    RetirarPrato():void {
        return this()
    }
    peek():T | undefined{
        return this.elementos[this.elementos.length -1]
    }
    isEmpty():boolean{
        return this.elementos.length === 0
    }
    size():number{
        return this.elementos.length
    }
    clear():void{
        this.elementos = []
    }
}

const minhaPIlha = new Pilha<number>()
minhaPIlha.push(1)
minhaPIlha.push(2)
minhaPIlha.push(3)

console.log(minhaPIlha.pop())
console.log(minhaPIlha.peek())
console.log(minhaPIlha.size())
console.log(minhaPIlha.isEmpty());

minhaPIlha.clear()
console.log(minhaPIlha.isEmpty())
*/
}
const meuPratos = new PilhaPratos<string>()
meuPratos.AdicionarPrato("Prato de ceramica")
meuPratos.AdicionarPrato("Prato de Vidro")
meuPratos.AdicionarPrato("Prato de Argila")

meuPratos.RetirarPrato()
meuPratos.isEmpty()
//console.log(meuPratos.size())