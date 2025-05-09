import { Exercicio } from "./exercicio";

export class Equipamentos {
    private nome:string
    private descricao:string
    private disponilidade:boolean

    public constructor(nome:string,descricao:string,disponibilidade:boolean){
        this.nome = nome
        this.descricao = descricao
        this.disponilidade = disponibilidade
    }

    verificarDisponibilidade():boolean {
        if (this.disponilidade === false) {
            console.log(`O aparelho está ocupado`);
    
        } else (this.disponilidade === true)
            console.log(`O aparelho está disponível`);
            return
    }
}