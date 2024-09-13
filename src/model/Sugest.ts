import { Usuario } from "./Usuario";

export class sugestoes {
    constructor(
        private     id: number,
        private     id_user: Usuario,
        private     sugestao: string,
        private     sugestao_at: string,
        private     implementacao_at: Date
    ) {}
    
    public dataSugestao(): void {  
}

    public dataAtividade(): void {  
}

}
