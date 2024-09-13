export class Usuario {
    constructor(
        private     id: number,
        private     nome: string,
        private     email: string,
        private     senha: number,
        private     criado_em: Date,
    ) {}
        public getId(): number {
            return this.id;
        }
    
        public getNome(): string {
            return this.nome;
        }
    
        public getEmail(): string {
            return this.email;
        }
    
        public getSenha(): number {
            return this.senha;
        }
    
        public getCriadoEm(): Date {
            return this.criado_em;
        }
    
        // Setters
        public setId(novoId: number): void {
            this.id = novoId;
        }
    
        public setNome(novoNome: string): void {
            this.nome = novoNome;
        }
    
        public setEmail(novoEmail: string): void {
            this.email = novoEmail;
        }
    
        public setSenha(novaSenha: number): void {
            this.senha = novaSenha;
        }
    
        public setCriadoEm(novaData: Date): void {
            this.criado_em = novaData;
        }
    
    public validarEmail(): boolean {
        return true
        //O sistema verifica se o email esta certo 
      }

    public validarSenha(): boolean {
        return true
        //O sistema verifica se a senha esta certa
      } 

    public RecuperarSenha(): string {
        return ''
      }

    public validarNome(): boolean {
        return this.nome.length >= 3;
      }
      
    public redefinirSenha(): void {
        console.log(`Um email de redefinição de senha foi enviado para ${this.email}.`);
      }
      
    public compararComOutroUsuario(outroUsuario: Usuario): boolean {
        return this.email === outroUsuario.email;
      }
      
}
