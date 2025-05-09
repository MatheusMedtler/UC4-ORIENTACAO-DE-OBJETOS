import { SaborPizza } from "./SaborPizza";

export class Pizza {
    sabor: SaborPizza;
    tamanho: string;
    preco: number;

    constructor(saborP: SaborPizza, tamanhoPizza: string, precoPizza: number) {
        this.sabor = saborP;
        this.tamanho = tamanhoPizza;
        this.preco = precoPizza;
    }

    getSabores():SaborPizza {
        return this.sabor
    }

    getTamanho(): string{
        return this.tamanho
    }

    getPrecos():number {
        return this.preco
    }

    descricao():void{
    console.log(`Pizza ${this.sabor}, do Tamanho ${this.tamanho},preço: ${this.preco}`)
    }
}
