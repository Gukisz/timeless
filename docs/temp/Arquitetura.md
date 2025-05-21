# 🕰️ Timeless

Timeless é um projeto que combina produtividade, inteligência artificial e design intuitivo para ajudar usuários a gerenciar melhor seu tempo, equilibrar tarefas e priorizar o que realmente importa.

Desenvolvido com **TypeScript**, **React** e **Node.js**, o Timeless segue os princípios de **Clean Architecture** e **MVC**, garantindo escalabilidade, manutenção e organização desde as primeiras linhas de código.

---

## 🔧 Back-End — Node.js + Express

**Pasta:** `timeless-backend/`

```
timeless-backend/
├── src/
│   ├── config/           # Configurações do projeto (.env, conexão com banco, etc)
│   ├── controllers/      # Requisições HTTP e respostas
│   ├── routes/           # Endpoints da API
│   ├── services/         # Lógica de negócio (tarefas, códigos, IA)
│   ├── usecases/         # Fluxos principais (autenticação, cadastro, etc)
│   ├── repositories/     # Acesso a dados (DB, cache, etc)
│   ├── models/           # Entidades e tipos
│   ├── utils/            # Funções auxiliares
│   ├── middlewares/      # Autenticação, validações, etc
│   ├── mail/             # Envio de e-mails
│   └── server.ts         # Arquivo principal
```

### Estrutura de Camadas

| Camada       | Função                                 | Exemplos                           |
| ------------ | -------------------------------------- | ---------------------------------- |
| Controllers  | Recebe requisições e retorna respostas | `sendCodeController`, `loginUser`  |
| Services     | Lógica de negócio                      | `AuthService`, `TaskService`       |
| Usecases     | Orquestra os fluxos principais         | `CreateUser`, `Verify2FA`          |
| Repositories | Acesso a banco de dados                | `UserRepository`, `TaskRepository` |
| Models       | Tipos e entidades                      | `User.ts`, `Task.ts`               |
| Utils        | Funções auxiliares                     | `generateCode()`, `formatDate()`   |

---

## 🌐 Front-End — React + TypeScript

**Pasta:** `timeless-frontend/`

```
timeless-frontend/
├── src/
│   ├── components/     # Componentes reutilizáveis (botões, inputs, etc)
│   ├── pages/          # Páginas da aplicação (Home, Tarefas, Login)
│   ├── services/       # Requisições HTTP
│   ├── hooks/          # Hooks personalizados
│   ├── contexts/       # Gerenciamento de estado global
│   ├── utils/          # Funções auxiliares
│   ├── assets/         # Imagens, fontes, ícones
│   └── App.tsx         # Componente raiz
```

---

## ☁️ Infraestrutura Recomendada

| Tecnologia         | Finalidade                                  |
| ------------------ | ------------------------------------------- |
| Node.js + Express  | Servidor HTTP                               |
| TypeScript         | Tipagem estática segura                     |
| JWT + 2FA          | Autenticação robusta                        |
| PostgreSQL/MongoDB | Banco de dados relacional ou não relacional |
| Redis (opcional)   | Cache e sessão temporária                   |
| Nodemailer         | Envio de e-mails (2FA, notificações)        |
| Docker (futuro)    | Containerização e portabilidade             |
| GitHub Actions     | CI/CD para automação de deploy              |

---

## 🤖 Módulo de Inteligência Artificial

Lógica adaptativa e sugestões inteligentes baseadas em uso e preferências dos usuários.

**Pasta:** `src/ai/`

```
src/ai/
├── schedulerAI.ts       # Sugestão de horários ideais com base em padrões
├── productivityTips.ts  # Dicas de produtividade com IA
├── preferenceEngine.ts  # Ajustes com base nas preferências do usuário
```

---

> Em breve: documentação da API, exemplos de uso e configurações de deploy com Docker + GitHub Actions.

Sinta-se à vontade para explorar, contribuir ou enviar sugestões para evoluir o projeto Timeless! ✨
