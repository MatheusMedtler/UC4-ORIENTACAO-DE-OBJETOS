import { Carta } from "./Cartas";

export class CartaEnergia extends Carta{
    valor:number


    constructor(nomeConst: string, tipoConst: string, valorConst:number) {
        super(nomeConst,tipoConst)
        this.valor = valorConst
    }

    exibirCarta(): void {
        console.log(`Carta ${this.nome} do tipo ${this.tipo}, com ${this.valor} de valor.`)
    }

}