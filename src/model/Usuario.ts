export class Usuario {
    constructor(
        private     id: number,
        private     nome: string,
        private     email: string,
        private     senha: number,
        private     criado_em: Date,
    ) {}

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
