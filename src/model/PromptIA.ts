export class PromptIA {
    constructor(
        private     id: number,
        private     prompt: string, 
        private     descricao: string
    ) {}
        // Getters
        public getId(): number {
            return this.id;
        }
    
        public getPrompt(): string {
            return this.prompt;
        }
    
        public getDescricao(): string {
            return this.descricao;
        }
    
        // Setters
        public setPrompt(novoPrompt: string): void {
            this.prompt = novoPrompt;
        }
    
        public setDescricao(novaDescricao: string): void {
            this.descricao = novaDescricao;
        }
    }
