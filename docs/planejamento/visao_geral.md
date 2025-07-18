# Visão Geral do Projeto Timeless

## Contexto e Objetivo do Projeto

O sistema, chamado **Timeless**, é um aplicativo inteligente de gerenciamento de tempo, tarefas e hábitos, com forte ênfase em personalização, bem-estar e uso de inteligência artificial. O objetivo é ajudar pessoas sobrecarregadas a organizar melhor sua rotina, combater a procrastinação, construir hábitos saudáveis e equilibrar produtividade com lazer e saúde mental.

### Problemas que o app resolve
- Procrastinação, sensação de improdutividade, ansiedade e culpa por descansar.
- Falha na gestão do tempo, rotina entediante, sobrecarga invisível.
- Dificuldade em manter hábitos, falta de clareza sobre o que fazer, desalinhamento entre objetivos e rotina.
- Falta de visão da própria evolução, sensação de estagnação, desconexão com hobbies.

---

## Funcionalidades Principais

- **Perfil e Autenticação:** Cadastro, login, recuperação de senha, personalização de perfil e preferências.
- **Preferências e Personalização:** Horários de foco, descanso, hobbies, temas visuais, sons, mascotes, notificações ajustáveis.
- **To-Do List Inteligente:** CRUD de tarefas com tags, prioridade, datas, histórico, filtros, adaptação automática da agenda.
- **Calendário Integrado:** Visualização semanal/mensal, integração com compromissos, importação de calendários externos, organização automática.
- **IA Adaptativa:** Sugestões personalizadas, reagendamento inteligente, aprendizado de comportamento, propostas contextuais.
- **Notificações Inteligentes:** Lembretes, sugestões, adiamento/reagendamento via notificação, mensagens motivacionais.
- **Relatórios e Análises:** Estatísticas, gráficos, comparativos, resumo diário.
- **Gamificação e Recompensas:** Insígnias, conquistas, desbloqueio de temas, mascotes, estatísticas motivacionais.

---

## Diferenciais e Estratégias

- **Personalização profunda:** O app aprende com o usuário e adapta sugestões, horários e notificações.
- **Reagendamento inteligente:** Histórico de reagendamentos, sugestões automáticas e manuais, registro de motivos.
- **Gamificação:** Mascote, conquistas, recompensas para engajar e motivar.
- **Foco em bem-estar:** Sugestões de pausas, hobbies, equilíbrio entre trabalho e lazer.
- **Relatórios visuais:** Para autoconhecimento e acompanhamento da evolução.

---

## Tecnologias e Arquitetura

- **Backend:** Node.js, TypeScript, TypeORM, MySQL.
- **Frontend:** HTML, CSS, JavaScript (com intenção de evoluir para React/PWA).
- **IA:** Algoritmos próprios ou integração com APIs externas.
- **Extras:** PWA para experiência mobile, notificações web, integração futura com serviços externos.

---

## Fluxo Inicial do Usuário

1. Cadastro com informações básicas.
2. Configuração inicial de preferências, interesses e horários.
3. Recebimento de sugestões inteligentes (aprovadas ou rejeitadas).
4. Uso contínuo com adaptação do sistema ao perfil do usuário.

---

## Modelagem de Dados (resumida)

- **Usuário:** Dados pessoais, preferências, estatísticas.
- **Tarefas:** Título, descrição, prioridade, tags, datas, status, histórico de reagendamento.
- **Grupos/Assuntos:** Organização temática das tarefas.
- **Relatórios:** Métricas de produtividade, tempo, evolução.
- **Histórico de Reagendamento:** Data original, nova data, motivo, tipo (automático/manual).

---

## Resumo de Estratégia de Desenvolvimento

- Começar pelo CRUD básico de tarefas e usuários.
- Estruturar dados inicialmente em JSON, depois migrar para MySQL.
- Foco inicial em funcionalidades essenciais, IA e gamificação vêm depois.
- Prototipação rápida das telas principais (login, dashboard, tarefas, sugestões).
- Iteração baseada em feedback e testes. 