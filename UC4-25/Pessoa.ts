import { Relacionavel } from "./interface";

export class Pessoa implements Relacionavel{
    public nome:string;
    protected sobrenome:string;
    protected dataNascimneto:string;
    protected genero:string;
    protected outrasRelacoes:Relacionavel[];


    constructor( nome:string,  sobrenome:string,  genero:string, outrasRelacoes:Relacionavel[]) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    
        this.genero = genero;
        this.outrasRelacoes = outrasRelacoes;
    }

    //Setter e Getter
    setNome(nome:string):void {
        this.nome = nome;
    }

    setSobrenome(sobrenome:string):void {
        this.sobrenome = sobrenome;
    }

    setDataNascimneto(dataNascimneto:string):void {
        this.dataNascimneto = dataNascimneto;
    }

    setGenero(genero:string):void {
        this.genero = genero;
    }

    setOutrasRelacoes(outrasRelacoes:Relacionavel[]):void {
        this.outrasRelacoes = outrasRelacoes;
    }

    getNome():string {
        return this.nome;
    }

    getSobrenome():string {
        return this.sobrenome;
    }

    getDataNascimneto():string {
        return this.dataNascimneto;
    }

    getGenero():string {
        return this.genero;
    }

    getOutrasRelacoes():Relacionavel[] {
        return this.outrasRelacoes;
    }


    descreverRelacao(): string {
        let relacao =  "Relacao: "+this.outrasRelacoes;
        console.log(relacao)
        return relacao;
    }
}