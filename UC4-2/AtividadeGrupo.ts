export class Gueirreiro{
    nome:string; 
    forca:number;
    vida:number;
    velocidade: number;
    Defesa:number;
    nivel: number;
    

    constructor (NomeGuerreiro:string,forcaGuerreiro:number,velocidadeGuerreiro:number,DefesaGuerreiro:number,nivelGueirreiro:number){
        this.nome = NomeGuerreiro;
        this.forca = forcaGuerreiro;
        this.vida = 100;
        this.velocidade = velocidadeGuerreiro;
        this.Defesa=DefesaGuerreiro;
        this.nivel= nivelGueirreiro;
    }

    //Metodos
    Bate():void{
        console.log("PAULADA")
    }

    SofreDano(quantity:number):void{
        console.log("O Guerreiro sofreu" + quantity,"de dano")
    }

    AtaqueEspecial(quantity:number):void{
            console.log("O Guerreiro usou seu especial e deu " + quantity, "de dano no Inimigo")

    }
}

const Guerreiro = new Gueirreiro("Alessia",200,100,50,150);
Guerreiro.AtaqueEspecial(200)