import { Usuario } from "./Usuario";

export class Preferencia {
    constructor(
        private     id: number,
        private     pref: string,
        private     horarioIni: Date,
        private     horarioFim: Date,
        private     intervalo: string,
        private     metodo_prod: string,
        private     id_user : Usuario
    ) {}
  }

  