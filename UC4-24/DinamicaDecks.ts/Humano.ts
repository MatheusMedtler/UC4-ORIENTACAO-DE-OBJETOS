import { Jogador } from "./Jogador";
import { Cartas, Cor } from "./Carta";
import { Carta } from "../../DinamicaPokemon/Cartas";
import readlineSync from "readline-sync";

export class Humano extends Jogador {
    escolherCarta(cartaTopo: Carta): Carta| null {
      console.log(`\nCarta no topo: ${cartaTopo.toString()}`);
      console.log("Sua mão:");
      this.mao.forEach((carta, index) => {
        console.log(`${index}: ${carta.toString()}`);
      });
  
      const input = prompt("Escolha a carta (índice) ou -1 para comprar: ");
      const indice = parseInt(input);
  
      if (indice === -1 || isNaN(indice)) return null;
  
      const cartaEscolhida = this.mao[indice];
      if (!cartaEscolhida) return null;
  
      if (
        cartaEscolhida.cor === cartaTopo.cor ||
         cartaEscolhida.valor== cartaTopo.valor
      ) {
        return this.jogarCarta(indice);
      }
  
      console.log("Carta inválida!");
      return null;
    }
  }