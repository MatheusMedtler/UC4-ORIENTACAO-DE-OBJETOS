import {Pacientes} from "./Pacientes"

class FilaSus{
    protected filaDePacientes:Pacientes[] = [];
    adicionarPaciente(item:Pacientes):void{
        this.filaDePacientes.push(item);
    }
    atenderPrimeiro():String | undefined{
        if (this.estaVazia()){
            console.log("A fila esta vazia");
            return undefined;
        }
        return this.filaDePacientes.shift().MostrarPaciente()
    }
    primeiroDaFila():Pacientes|undefined{
        if (this.estaVazia()){
        console.log("A fila esta vazia");
        return undefined;}
        return this.filaDePacientes[0];
    }
    estaVazia():boolean{
        return this.filaDePacientes.length === 0;
    }
    tamanho():number{
        return this.filaDePacientes.length;
    }  

    exibirFila():void{
        console.table(this.filaDePacientes);
    }
}

const paciente1 = new Pacientes("Bruno","Critico")
const paciente2 = new Pacientes("MetyGames","Critico")
const paciente3 = new Pacientes("RadiccalBateman","Critico")


const filaSus = new FilaSus();
filaSus.adicionarPaciente(paciente1);
filaSus.adicionarPaciente(paciente2);
filaSus.adicionarPaciente(paciente3);
filaSus.exibirFila()
console.log(`Proximo cliente a ser atendido ${filaSus.atenderPrimeiro()}`);
console.log(`O primeiro paciente foi atendido `);
filaSus.exibirFila()

/*
1) A fila organiza os pacientes de forma justa, controlando com base no FIFO, em portugues
primeiro a entrar primeiro a sair. Ela garante que não "furem a fila" e que a prioridade seja respeitada
sendo do primeiro ao ultimo.

2) O FIFO (Fisrt In,First Out) significa que quem entrou primeiro na fila é atendido
primeiro, atendento os criterios.


*/