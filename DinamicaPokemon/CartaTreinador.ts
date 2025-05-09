import { Carta } from "./Cartas";

export class CartaTreinador extends Carta{
    descricao:string;


    constructor(nomeConst: string, tipoConst: string, descricaoConst:string) {
        super(nomeConst,tipoConst);
        this.descricao = descricaoConst;
    }

    exibirCarta(): void {
        console.log(`Carta ${this.nome} do tipo ${this.tipo}, com ${this.descricao} de descricao.`)
    }

}