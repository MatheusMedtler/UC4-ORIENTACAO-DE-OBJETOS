import { Pessoa } from "./Pessoa";
import { ArvoreGenealogica } from "./ArvoreGenealogica";
import { NodePessoa } from "./NodePessoa";

const eu = new Pessoa("Matheus","Medtler Alves","Masculino",[]);
const pai = new Pessoa("Fernando","Alves","Masculino",[]);
const mae = new Pessoa("Fabiane","Medtler Alves","Feminino",[]);
const voPai = new Pessoa("Bereniice","Alves","Feminino",[]);
const voMae = new Pessoa("Auri","Medtler","Masculino",[]);
const voMaee = new Pessoa("Laura","Medtler","Feminino",[]);
const irma = new Pessoa("Camille","Medler Alves","Feminino",[]);


const arvore = new ArvoreGenealogica(raiz);
arvore.adicionarFilho("Matheus", pai);
arvore.adicionarFilho("matheus", mae);
arvore.adicionarFilho("Adriana", voPai);
arvore.adicionarFilho("Andrea", voMae);


arvore.imprimirArvore();