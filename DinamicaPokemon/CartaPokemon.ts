import { Carta } from "./Cartas";

export class CartaPokemon extends Carta{
    HP:number
    ataque:number

    constructor(nome: string, tipo: string, HP:number, ataque:number) {
        super(nome,tipo)
        this.HP = HP
        this.ataque =ataque
    }

    exibirCarta(): void {
        console.log(`Carta: ${this.nome}, Tipo: ${this.tipo}, com ${this.HP} de HP e ${this.ataque} de ataque.`)
    }

}