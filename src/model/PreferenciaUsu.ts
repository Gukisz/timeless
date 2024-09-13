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
  }

  