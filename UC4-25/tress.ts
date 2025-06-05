

export class Node <T>{
    protected value:T
    protected children: Node<T>[]=[]

    constructor(valueConst:T){
        this.value = valueConst;
    }

    addChildren(NodeT:Node<T>){
         this.children.push(NodeT)
}
    getChildren():Node<T> []{
        return this.children
    }

}

const rootNode = new Node ("A");
const NodeB = new Node("B")
const NodeC = new Node("C")

rootNode.addChildren(NodeB)
rootNode.addChildren(NodeC)

console.log(rootNode.getChildren())
console.log(NodeB.getChildren())
console.log(NodeC.getChildren())