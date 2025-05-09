class Pilha <T>{
    private elementos: T[] = []
    push(item:T):void{
        this.elementos.push(item)
    }
    pop():T | undefined {
        return this.elementos.pop()
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
