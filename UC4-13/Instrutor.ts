import { Usuario } from "./Usuario"

export class Instrutor {
    private especialidades : string
    private cref : string

    public constructor(nomeUsu:string,email:string,especialidades:string,cref:string,){
        this.especialidades = especialidades
        this.cref = cref
    }

}