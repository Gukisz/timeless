export class Agenda {
    constructor(
        private     id: number,
        private     data : Date,
        private     horarios: Date,
        private     titulo_tarefa: string,
        private     tarefas: string,
    ) {}   
    
// Getters
public getId(): number {
    return this.id;
}

public getEvento(): { data: Date; horarios: Date; titulo_tarefa: string; tarefas: string } {
    return {
        data: this.data,
        horarios: this.horarios,
        titulo_tarefa: this.titulo_tarefa,
        tarefas: this.tarefas
    };
}

public getHorario(): Date {
    return this.horarios;
}

public getData(): Date {
    return this.data;
}

public getTituloTarefa(): string {
    return this.titulo_tarefa;
}

// Setters
public setEvento(data: Date, horarios: Date, titulo_tarefa: string, tarefas: string): void {
    this.data = data;
    this.horarios = horarios;
    this.titulo_tarefa = titulo_tarefa;
    this.tarefas = tarefas;
}

public setHorario(novoHorario: Date): void {
    this.horarios = novoHorario;
}

public setData(novaData: Date): void {
    this.data = novaData;
}

public setTituloTarefa(novoTitulo: string): void {
    this.titulo_tarefa = novoTitulo;
}

// Métodos adicionais
// Filtrar eventos por data
public filtrarData(date: Date): void {
    if (this.data.toDateString() === date.toDateString()) {
        console.log(`Evento encontrado: ${this.titulo_tarefa}`);
    } else {
        console.log('Nenhum evento encontrado para esta data.');
    }
}

// Filtrar eventos por intervalo de datas
public filtrarIntervalo(dataInicial: Date, dataFinal: Date): void {
    if (this.data >= dataInicial && this.data <= dataFinal) {
        console.log(`Evento encontrado no intervalo: ${this.titulo_tarefa}`);
    } else {
        console.log('Nenhum evento encontrado neste intervalo.');
    }
}

// Listar tarefas por vir a partir da data atual
public tarefasPorVir(currentDate: Date): void {
    if (this.data > currentDate) {
        console.log(`Tarefa por vir: ${this.titulo_tarefa}`);
    } else {
        console.log('Nenhuma tarefa futura.');
    }
}

// Ajustar tempo da tarefa
public ajustarTempoTarefa(id: number, newTime: string): void {
    if (this.id === id) {
        this.horarios = this.StringToDate(newTime);
        console.log(`Tempo da tarefa ajustado para: ${this.horarios}`);
    } else {
        console.log('ID da tarefa não encontrado.');
    }
}

// Ajustar data da tarefa
public ajustarDataTarefa(id: number, newDate: Date): void {
    if (this.id === id) {
        this.data = newDate;
        console.log(`Data da tarefa ajustada para: ${this.data}`);
    } else {
        console.log('ID da tarefa não encontrado.');
    }
}

// Converter string para Date
public StringToDate(timeString: string): Date {
    return new Date(``);
}
}


