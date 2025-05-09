export class Usuario {
    protected nome:string
    protected email:string

    public constructor(nomeUsuarui:string,email:string){
        this.nome = nomeUsuarui
        this.email = email
    }

    exibirInformacoes():void{
        console.log(`O usuario ${this.nome} do email:${this.email}`)
    }
}