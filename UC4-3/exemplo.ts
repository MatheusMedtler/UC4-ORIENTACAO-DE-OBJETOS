import { Cat } from "../UC4-2/class";

export class user{
    private nome:string;
    private cat:Cat

    setNome(meuNome:string):void{this.nome=meuNome}
    setcat(meuCat:cat):void{this.cat=meuCat}
    adicionarTarefa():void{console.log("Tarefa adicionada:")}
}

const UserMatheus = new user();
UserMatheus.setNome("Matheus");
const meuGato = new Cat();
meuGato.setname("Lucky")
UserMatheus.setcat(meuGato)