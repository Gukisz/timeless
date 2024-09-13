import { Preferencia } from "./Preferencia";
import { Usuario } from "./Usuario";

export class PreferenciasUsuario {
    constructor(
        private     id: number,
        private     id_pref: Preferencia,
        private     id_user: Usuario,
        private     data: Date,
        private     horarios: string,
        private     titulo_tarefa: string,
        private     tarefas : number
    ) {}
    
        public getId(): number {
            return this.id;
        }
    
        public getId_pref(): Preferencia {
            return this.id_pref;
        }
    
        public getId_user(): Usuario {
            return this.id_user;
        }
    
        public getData(): Date {
            return this.data;
        }
    
        public getHorarios(): string {
            return this.horarios;
        }
    
        public getTitulo_tarefas(): string {
            return this.titulo_tarefa;
        }
    
        public getTarefas(): number {
            return this.tarefas;
        }
    
        // Setters
        public setId_pref(novaPref: Preferencia): void {
            this.id_pref = novaPref;
        }
    
        public setId_user(novoUsuario: Usuario): void {
            this.id_user = novoUsuario;
        }
    
        public setData(novaData: Date): void {
            this.data = novaData;
        }
    
        public setHorarios(novosHorarios: string): void {
            this.horarios = novosHorarios;
        }
    
        public setTitulo_tarefas(novoTitulo: string): void {
            this.titulo_tarefa = novoTitulo;
        }
    
        public setTarefas(novasTarefas: number): void {
            this.tarefas = novasTarefas;
    }
}

