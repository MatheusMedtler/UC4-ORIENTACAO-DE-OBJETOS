export abstract class CriaturaMagica {
    private nome: string;
    private tipo: string;
    private poder: number;
    constructor(nome: string, tipo: string, poder: number) {
        this.nome = nome;
        this.tipo = tipo
        this.poder = poder
    }
    abstract UsarMagia(): void;
}