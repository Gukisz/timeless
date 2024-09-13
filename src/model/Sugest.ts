import { Usuario } from "./Usuario";

export class sugestoes {
    constructor(
        private     id: number,
        private     id_user: Usuario,
        private     sugestao: string,
        private     sugestao_at: string,
        private     implementacao_at: Date
    ) {}
        
    public getId(): number {
            return this.id;
        }
    
        public getIdUser(): Usuario {
            return this.id_user;
        }
    
        public getSugestao(): string {
            return this.sugestao;
        }
    
        public getSugestaoAt(): string {
            return this.sugestao_at;
        }
    
        public getImplementacaoAt(): Date {
            return this.implementacao_at;
        }

        public setIdUser(novoUsuario: Usuario): void {
            this.id_user = novoUsuario;
        }
    
        public setSugestao(novaSugestao: string): void {
            this.sugestao = novaSugestao;
        }
    
        public setSugestaoAt(novaSugestaoAt: string): void {
            this.sugestao_at = novaSugestaoAt;
        }
    
        public setImplementacaoAt(novaImplementacaoAt: Date): void {
            this.implementacao_at = novaImplementacaoAt;
        }
    
        // Métodos adicionais
        // Método para retornar a data da sugestão
        public dataSugestao(): string {
            return this.sugestao_at;
        }
    
        // Método para retornar a data da implementação
        public dataAtividade(): Date {
            return this.implementacao_at;
        }
    }
