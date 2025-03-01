import { BlocoDeMadeira } from "./BlocoDeMadeira";

export class Mundo {
    private blocoMadeira: BlocoDeMadeira[];

    constructor(blocoMadeira: BlocoDeMadeira[]) {
        this.blocoMadeira = blocoMadeira;
    }

    setBlocoMadeira(blocoMadeira: BlocoDeMadeira[]): void {
        this.blocoMadeira = blocoMadeira;
    }

    getBlocoMadeira(): BlocoDeMadeira[] {
        return this.blocoMadeira;
    }

    exibirBlocos(): void {
        console.log(`Blocos de Madeira no mundo: ${this.blocoMadeira.length}`);
    }
}

const Madeiras:BlocoDeMadeira[] = [new BlocoDeMadeira ("Pinheiro",5), new BlocoDeMadeira ("Jungle",10)];
const Mundos = new Mundo(Madeiras)
Mundos.exibirBlocos()