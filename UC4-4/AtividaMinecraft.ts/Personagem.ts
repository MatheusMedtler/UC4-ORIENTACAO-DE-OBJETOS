import { BlocoDeMadeira } from "./BlocoDeMadeira";

export class Personagem {
    private vida: number;
    private forca: number;
    private inventario: BlocoDeMadeira[];

    constructor(vida: number, forca: number,) {
        this.vida = vida;
        this.forca = forca;
        this.inventario = [];
    }

    setVida(vida: number): void {
        this.vida = vida;}

    setForca(forca: number): void {
        this.forca = forca;}

    setbloco(inventarioSet:BlocoDeMadeira): void {
        this.inventario.push(inventarioSet)}

    getVida(): number {
        return this.vida;}

    getForca(): number {
        return this.forca;}
    
    GetInventario(): Array<BlocoDeMadeira> {return this.inventario}

    exibirPersonagem(): void {
        console.log(`O personagem tem vida: ${this.vida} e força: ${this.forca}`)
        console.log("inventário", this.inventario)
    }
}

let bloco1 = new BlocoDeMadeira("Carvalho", 10)
const  Personagem1 = new Personagem (100,12)
let bloco2 = new BlocoDeMadeira ("Pinheiro", 4)
Personagem1.setbloco(bloco2)
Personagem1.exibirPersonagem()