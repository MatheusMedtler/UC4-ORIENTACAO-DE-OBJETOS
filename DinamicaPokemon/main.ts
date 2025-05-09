import { Carta } from "./Cartas";
import { Baralho } from "./Baralho";
import { CartaEnergia } from "./CartaEnergia";
import { CartaItem } from "./CartaItem";
import { CartaPokemon } from "./CartaPokemon";
import { CartaTreinador } from "./CartaTreinador";


const cartas: Carta[] = [
    new CartaEnergia("Pikachu","Eletrico",39),
    new CartaItem("Pikachu","Item","Recupera 40 de HP"),
    new CartaPokemon("Bobusauri","Fogo",100,20),
    
]

const baralho = new Baralho(cartas);

console.log("Carta do topo:", baralho.visualizarTopo());
console.log("Carta comprada:", baralho.comprarCarta());
console.log("Nova carta do topo:", baralho.visualizarTopo());



const itemn = new CartaItem("Carta fogo","fogp","Fogo")
console.log(itemn)

const compras = new CartaPokemon("Pikachu","Eletrivo",20,20)
console.log(compras)

const teste = new CartaTreinador("Bruno","Fogo","Carta otima")
console.log(teste)
