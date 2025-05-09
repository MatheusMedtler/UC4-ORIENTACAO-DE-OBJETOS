import { Carta } from "./Cartas";

export class CartaItem extends Carta{
    efeito:string;


    constructor(nomeConst: string, tipoConst: string, efeitoConst:string) {
        super(nomeConst,tipoConst);
        this.efeito = efeitoConst;
    }

    exibirCarta(): void {
        console.log(`Carta ${this.nome} do tipo ${this.tipo}, com ${this.efeito} de efeito.`)
    }

}

