## 👤 **Usuário**

### **Campos de Cadastro**

**Obrigatórios:**

* Nome de usuário (username)
* E-mail
* Senha
* Data de nascimento
* Sexo
* Orientação sexual
* Telefone
* Estado civil

**Opcionais:**

* Foto de perfil
* Cidade, Estado, País

### **Informações Adicionais**

* Situação atual: Trabalha / Estuda
* Interesses (para personalização):

  * Hobbies (Ex: Música, Séries, Viagens, Academia, Esportes)
  * Área de estudo ou profissão
  * Preferências de idioma, aparência, som e notificações

### **Estatísticas por usuário**

* Sessões concluídas
* Tarefas concluídas
* Dias ativos
* Sequência de dias produtivos
* Tempo total de foco

---

## ✅ **Atividades / Tarefas**

### **Campos principais**

* ID
* Título
* Descrição
* Tipo (Ex: VIDEO, DESENVOLVIMENTO, LEITURA, QUESTOES)
* Grupo (FK para tabela `grupos`)
* Assunto (FK para tabela `assuntos`)
* Tags (ligação N\:N com tabela `tags`)
* Data de criação
* Data de conclusão
* Data de vencimento
* Horário marcado (único ou separado em início/fim)
* Tempo estimado e tempo real gasto
* Pausas registradas

### **Funcionalidades complementares**

* Reagendamento inteligente com IA
* Identificação de horários livres
* Concluir depois
* Kanban opcional

---

## 🗂️ **Estrutura Relacional**

### **Tabelas**

* `grupos`: categorias como "Estudos", "Saúde", "Trabalho"
* `assuntos`: temas específicos como "Matemática", "JavaScript"
* `tags`: personalizáveis, com prioridade e filtros (Urgente, Normal, Tranquilo)
* `atividade_tags`: ligação entre atividades e suas tags (N\:N)

---

## 📊 **Relatórios e Métricas**

* Gráficos de produtividade semanal/mensal
* Tempo médio por tarefa ou por tag
* Comparativos com o histórico pessoal
* Resumo diário: tarefas feitas / pendentes, tempo focado

---

## 🎁 **Extras Personalizáveis**

* **Modo escuro / claro**
* Sons de foco e descanso
* Notificações positivas e inteligentes
* Recompensas (insígnias, temas, mascotes)
* Sugestões de uso para tempo ocioso
* Mascote humanizado com frases motivacionais
* Preferência de calendário, idioma e métodos organizacionais

---