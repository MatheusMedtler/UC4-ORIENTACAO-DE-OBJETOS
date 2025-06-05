import { Carta } from "../../DinamicaPokemon/Cartas";
import { Cartas } from "./Carta";

export abstract class Jogador{
    protected nome: string
    protected mao: Carta[] = []
    constructor(nome: string) {
        this.nome = nome;
        this.mao = [];
    }

    receberCarta(carta: Carta): void {
        this.mao.push(carta);
    }

    temCartas(): boolean {
        return this.mao.length > 0;
    }

    getNome(): string {
        return this.nome;
    }

    getMao(): Carta[] {
        return this.mao;
    }
    jogarCarta(indice: number): Carta {
        return this.mao.splice(indice, 1)[0];
      }
    
    
}
