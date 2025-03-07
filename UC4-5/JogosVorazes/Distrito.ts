export class Distrito {
    private nome : string
    private populacao : number
    protected recurso : string []

    constructor(nomeDistrito:string,populacao:number,recurso:string[]){
        this.nome = nomeDistrito
        this.recurso = recurso
        this.populacao = populacao
    }

    setNome(nome:string):void{
        this.nome = nome };
    
    setPopulacao(populacao:number):void{
        this.populacao= populacao };

   

    setRecurso(recurso:string[]):void{
        this.recurso = recurso};

        getNome():string{
            return this.nome }
        
        getPopu():number{
            return this.populacao}

            
        getRecurso():string[]{
                return this.recurso  }
            
    ExibirDistrito():void{console.log(`Os recursos do  ${this.nome} com a população de: ${this.populacao} tributos e os recursos disponiveis são: ${this.recurso}!`)}
        
}
const Distrito12 = new Distrito("Distrito 12",8000,["Carvao"])
Distrito12.ExibirDistrito()

const Distrito2 = new Distrito("Distrito 2",2000,["Pedreiras de Pedras","Mármore","Armas","Munições"])
Distrito2.ExibirDistrito()

const Distrito3 = new Distrito("Distrito 3",5000,["Eletronicos","Dispositivos avançados","Automação","Robotica"])
Distrito3.ExibirDistrito()