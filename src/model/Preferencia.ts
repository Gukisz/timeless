export class Preferencia {
    constructor(
        private     id: number,
        private     pref: string,
        private     horarioIni: Date,
        private     horarioFim: Date,
        private     intervalo: string,
        private     metodo_prod: string,
    ) {}

        public getId(): number {
            return this.id;
        }
    
        public getPref(): string {
            return this.pref;
        }
    
        public getHorarioIni(): Date {
            return this.horarioIni;
        }
    
        public getHorarioFim(): Date {
            return this.horarioFim;
        }
    
        public getIntervalo(): string {
            return this.intervalo;
        }
    
        public getMetodoProd(): string {
            return this.metodo_prod;
        }
    
        public setPref(novaPref: string): void {
            this.pref = novaPref;
        }
    
        public setHorarioIni(novoHorarioIni: Date): void {
            this.horarioIni = novoHorarioIni;
        }
    
        public setHorarioFim(novoHorarioFim: Date): void {
            this.horarioFim = novoHorarioFim;
        }
    
        public setIntervalo(novoIntervalo: string): void {
            this.intervalo = novoIntervalo;
        }
    
        public setMetodoProd(novoMetodoProd: string): void {
            this.metodo_prod = novoMetodoProd;
        }
    
        // Métodos funcionais
    
        // Método para calcular a duração total entre horário inicial e final
        public calcularDuracao(): number {
            const diff = this.horarioFim.getTime() - this.horarioIni.getTime();
            return Math.floor(diff / (1000 * 60)); // Retorna a duração em minutos
        }
    
        // Método para verificar se a preferência de horário é válida
        public horarioValido(): boolean {
            return this.horarioIni < this.horarioFim;
        }
    
        // Método para verificar se o método de produtividade é um dos aceitos
        public validarMetodoProd(): boolean {
            const metodosAceitos = ['Pomodoro', 'Técnica X', 'Técnica Y'];
            return metodosAceitos.includes(this.metodo_prod);
        }
    
        // Método para retornar um resumo da preferência
        public obterResumo(): string {
            return `Preferência: ${this.pref}, Início: ${this.horarioIni.toLocaleTimeString()}, Fim: ${this.horarioFim.toLocaleTimeString()}, Intervalo: ${this.intervalo}, Método: ${this.metodo_prod}`;
        }
    }

