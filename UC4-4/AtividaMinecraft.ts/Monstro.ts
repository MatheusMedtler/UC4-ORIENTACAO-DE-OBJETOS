export class Monstro {
    private vida : number
    private PoderDeExplosao : number
    private distanciaDeExplosao : number

    constructor(vida:number,PoderDeExplosao:number,distanciaDeExplosao:number){
        this.vida = vida
        this.PoderDeExplosao = PoderDeExplosao
        this.distanciaDeExplosao = distanciaDeExplosao
    }


    setVida(vida:number):void{this.vida = vida };
    SetPoderDeExplosao(PoderDeExplosao:number):void{this.PoderDeExplosao = PoderDeExplosao};
    SetDistanciaExplosao(distanciaDeExplosao:number):void{this.distanciaDeExplosao = distanciaDeExplosao}

    getVida():number{
        return this.vida
    }
    getDPoderExplosao():number{
        return this.PoderDeExplosao
    }
    GetDistanciaExplosao():number{
        return this.distanciaDeExplosao
    }

        ExibirMonstro():void{console.log(`O crepper esta com ${this.vida} de coração e sua explosao causou ${this.PoderDeExplosao} de dano ao seu inimigo com a distancia de explosao de ${this.distanciaDeExplosao} blocos`)}
}


const Monstros = new Monstro(20,15,5)
Monstros.ExibirMonstro()