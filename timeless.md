1. Objetivo da Aplicação

Um aplicativo que ajuda as pessoas a gerenciar o tempo e priorizar tarefas entre outras atividades de forma eficaz usando a inteligência artificial como base. O usuário coloca seus dados e preferências no aplicativo e sugere melhorias para otimizar o uso do tempo, evitando procrastinação. Também sugere intervalos de descanso, técnicas de produtividade, como Pomodoro, e ajuda a criar um equilíbrio entre trabalho e lazer.

 No fluxo de uso do programa o usuário faria um cadastro e logo após poderia escolher suas preferências e gostos pessoais, logo em seguida já seriam dadas sugestões “iniciais” e a pessoa aprovaria ou não a sugestão.

2. Funcionalidades Principais

    Autenticação:
        Cadastro de usuários.
        Login e Logout.
        Recuperação de senha.

    Funcionalidades para Usuários:
        Editar perfil e preferências.
        Aceitar ou Recusar sugestôes geradas.
        Agenda com to-do list.

    Administração:
        Adicionar Prompt 
        Gerenciar Usuarios
        Suporte Técnico

3. Requisitos Não Funcionais

Performance:
    Tempo de resposta, as sugestões geradas pela IA devem ser rápidas, com um tempo de resposta inferior a 2 segundos após o envio do usuario.
    Eficiência no uso de recursos, o aplicativo deve ser leve, consumindo o mínimo de memória ram em dispositivos móveis, para garantir que não afete negativamente outras funções do dispositivo.
    Escalabilidade, a arquitetura do sistema deve ser capaz de escalar para suportar um grande número de usuários simultâneos, utilizando servidores em nuvem para processar grandes volumes de dados.

Segurança:
    Criptografia de senhas.
    Controle de acesso seguro para usuários e administradores.
    Proteção contra ataques comuns (ex.: SQL Injection, XSS).
    Política de privacidade, garantir que os dados dos usuários não sejam compartilhados com terceiros sem consentimento explícito.

Compatibilidade:
    Compativel para dispositivos móveis (Androids E IoS)


4. Requisitos Técnicos
Frontend:
Framework: React Native ou Ionic
Biblioteca de componentes: Material UI ou Bootstrap.
Responsividade: CSS Grid/Flexbox.

Backend:
Linguagem: Node.js com Express.js.
APIs: REST (ou GraphQL).

Banco de Dados:
Tipo: Relacional (MySQL ou PostgreSQL).
Estrutura: Tabelas ou coleções para usuários, sugestões, etc.

Hospedagem e Infraestrutura:

## 6. Modelo de Dados

### Exemplo: Tabela de Usuários
| Campo      | Tipo       | Descrição                            |
|------------|------------|--------------------------------------|
| id         | INT        | Identificador único do usuário       |
| nome       | VARCHAR(50)| Nome do usuário                      |
| email      | VARCHAR(100)| Email do usuário                    |
| senha      | VARCHAR(255)| Senha criptografada                 |
| criado_em  | DATETIME   | Data de criação do usuário           |

### Exemplo: Tabela de Preferências

| Campo         | Tipo        | Descrição                          |
|---------------|-------------|------------------------------------|
| id            | INT         | Identificador unico da preferencia  |
| pref          | VARCHAR(255)| Nome da preferencia           |
| horarioInicio | DATETIME    | Inicio da atividade         |
| horarioFim    | DATETIME    | Fim da atividade                 |

| desenho       | BLOB        | Desenho enviado (opcional)         |
| enviado_em    | DATETIME    | Data de envio                      |
