import { Pessoa } from "./Pessoa";

export class Conjuge extends Pessoa {
    descreverRelacao(): string {
      return `${this.nome} é cônjuge.`;
    }
  }
  