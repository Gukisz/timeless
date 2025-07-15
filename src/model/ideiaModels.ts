export interface Relatorio {
    dataInicial: Date
    dataFinal: Date
    recorrencia: string[]
    semanas: number
    concluidas: number[]
    faltas: number[]
    melhorSequencia: number

    calcularSequencia(): void
    calcularPorcentagem(): void
    calcularHorariosMaisComuns(): void
}

export interface HistoricoAtividades {
    id: number
    id_tarefa: number
    data_conclusao: Date;
}

export interface Grupo {
    nome: string
}

export interface Assunto {
    nome: string
    grupo: Grupo
}

export interface Tarefa {}