export class feitico {
    nome:string;
    PoderFeitico:number;

    constructor(nome:string,PoderFeit:number) {
        this.nome = nome
        this.PoderFeitico =PoderFeit
    }


    lançar(): void {
        console.log(`O feitiço foi ${this.nome} foi lançado com o poder de ${this.PoderFeitico}  `);
    }
}