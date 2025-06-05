import { Relacionavel } from "./relacionavel"


export class Pessoa implements Relacionavel{
    protected nome:String
    protected sobrenome:String
    protected DataNascimento:number
    protected genero:string
    private   outrasRelacoes:Relacionavel[]


    public GetSet( nome:string, sobrenome:string, DataNascimento:number, genero:string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.DataNascimento = DataNascimento;
        this.genero = genero;
    }

    public getNome() {
        return this.nome;
    }

    public setNome( nome) {
        this.nome = nome;
    }

    public  getSobrenome() {
        return this.sobrenome;
    }

    public setSobrenome( sobrenome) {
        this.sobrenome = sobrenome;
    }

    public  getDataNascimento() {
        return this.DataNascimento;
    }

    public setDataNascimento( DataNascimento) {
        this.DataNascimento = DataNascimento;
    }

    public  getGenero() {
        return this.genero;
    }

    public setGenero(genero) {
        this.genero = genero;
    }

    descreverRelacao(): string {
        return
    }
}
