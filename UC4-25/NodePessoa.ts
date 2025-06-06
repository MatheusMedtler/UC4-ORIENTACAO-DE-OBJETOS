import { Pessoa } from "./Pessoa";

export class NodePessoa {
    pessoa: Pessoa;
    filhos: NodePessoa[];

    constructor(pessoa: Pessoa) {
        this.pessoa = pessoa;
        this.filhos = [];
    }

    adicionarFilho(filho: NodePessoa): void {
        this.filhos.push(filho);
    }
}