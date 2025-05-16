export class Pacientes{
    private nomePaciente:string;
    private status:string;


   constructor(nomePaciente:string,status:string){
   this.nomePaciente = nomePaciente;
   this.status = status;
   }

   public getNomePaciente():string{return this.nomePaciente}
   
   public getStatus():string{return this.status}


   public setNomePaciente(nomePaciente:string):void{this.nomePaciente = nomePaciente}

   public setSatatus(status:string):void{this.status = status}

   MostrarPaciente(): string {
    return `${this.nomePaciente} (Status: ${this.status})`;
}

}