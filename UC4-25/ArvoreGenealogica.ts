import { Pessoa } from "./Pessoa";
import { NodePessoa } from "./NodePessoa";

export class ArvoreGenealogica {
    private raiz: NodePessoa;

    constructor(pessoaRaiz: Pessoa) {
        this.raiz = new NodePessoa(pessoaRaiz);
    }

    adicionarFilho(nomePai: string, filho: Pessoa): boolean {
        const paiNode = this.encontrarNodePorNome(this.raiz, nomePai);
        if (paiNode) {
            paiNode.adicionarFilho(new NodePessoa(filho));
            return true;
        }
        return false;
    }

    encontrarPessoa(nome: string): Pessoa | undefined {
        const node = this.encontrarNodePorNome(this.raiz, nome);
        return node?.pessoa;
    }

    private encontrarNodePorNome(node: NodePessoa, nome: string): NodePessoa | null {
        if (node.pessoa.getNome() === nome) {
            return node;
        }
        for (const filho of node.filhos) {
            const encontrado = this.encontrarNodePorNome(filho, nome);
            if (encontrado) return encontrado;
        }
        return null;
    }

    imprimirArvore(node: NodePessoa = this.raiz, nivel: number = 0): void {
        console.log(`${"  ".repeat(nivel)}- ${node.pessoa.getNome()} ${node.pessoa.getSobrenome()}`);
        node.filhos.forEach(filho => this.imprimirArvore(filho, nivel + 1));
    }

    getRaiz(): NodePessoa {
        return this.raiz;
    }
}