export abstract class Carta {
    nome: string;
    tipo: string
  
    constructor(nome: string, tipo: string) {
      this.nome = nome
      this.tipo = tipo
    }
  
    exibirCarta(): void{
      console.log(`Nome: ${this.nome}, Tipo: ${this.tipo}`)
    }
  }