export class LugaresMagicos {  
    private nome: string;  
    protected andares: number;  
    protected desafios: string;  

    constructor(nomeConst: string, andaresConst: number, desafiosConst: string) {     
        this.nome = nomeConst
        this.andares = andaresConst    
        this.desafios = desafiosConst 
    }  

    setNome(novoNome: string): void {         
        this.nome = novoNome  
    }    

    setAndares(andar: number): void {         
        this.andares = andar 
    }    

    setDesafios(desaf: string): void {         
        this.desafios = desaf 
    }    

    getNome() {         
        return this.nome
    }    

    getAndares() {         
        return this.andares     
    }    

    getDesafios() {         
        return this.desafios
    }    

    explorar(): string {     
        return `Você está explorando ${this.nome}, este lugar tem ${this.andares} andares e o desafio é: ${this.desafios}`
    }  

    Exibir(): void {     
        console.log(`Lugar: ${this.nome}`) 
        console.log(`Andares: ${this.andares}`)     
        console.log(`Desafio: ${this.desafios}`)
    }  
}  

const Hogawarts = new LugaresMagicos("Hogwarts", 4, "Passar por um labirinto com armadilhas mágicas e criaturas, resolvendo feitiços e enigmas.");
console.log(Hogawarts.explorar())

const TorreCorvinal = new LugaresMagicos("Torre da corvinal",6,"Descobrir a sequência mágica para que a escada pare no lugar certo.");
TorreCorvinal.Exibir()