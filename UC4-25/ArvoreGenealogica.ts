import { Pessoa } from "./interface";
import { Node } from "./tress";



export class ArvoreGenealogica<T> extends Node<Pessoa>{
    protected Noraiz:Pessoa;    
    protected children: ArvoreGenealogica<T>[]=[]
    protected pai: Pessoa [] = []

    constructor(){
     super()

    }

    addFilho( mFilho):void{
         this.pai.push(Filho)
    }

    getFilho():ArvoreGenealogica<T> []{
        return this.children
    }

}

const rootNode = new ArvoreGenealogica ("");
const NodeB = new ArvoreGenealogica("B")
const NodeC = new ArvoreGenealogica()

rootNode.addChildren(NodeB)
rootNode.addChildren(NodeC)

console.log(rootNode.getChildren())
console.log(NodeB.getChildren())
console.log(NodeC.getChildren())
