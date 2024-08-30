# Backend-API-Cadastro_Usuarios

Este projeto é o backend de uma API RESTful para gerenciamento de usuários, desenvolvida com propósitos de estudo.
Ele fornece endpoints para operações de criação, leitura, atualização e exclusão de usuários (CRUD).
A aplicação é construída utilizando Node.js, Express e MongoDB.

## 🚀 Tecnologias

- [Node.js]
- [Express]
- [MongoDB]
- [Prisma ORM]

## ⚙️ Pré-requisitos

Antes de começar, você precisará ter o [Node.js](https://nodejs.org/en/) e o [MongoDB](https://www.mongodb.com/try/download/community) instalados em sua máquina.

## 🛠️ Como executar o projeto

Siga os passos abaixo para configurar e executar o projeto:

1. Clone este repositório:

   ```bash
   git clone https://github.com/fernandobrocco/Backend-API-Cadastro_Usuarios.git

   Acesse a pasta do projeto no terminal:
   cd Backend-API-Cadastro_Usuarios

   Instale as dependências:
   npm install

   Configure as variáveis de ambiente no arquivo .env (crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis):
   DATABASE_URL=mongodb://localhost:27017/nome_do_banco

   Execute as migrações do banco de dados (se estiver usando Prisma):
   npx prisma migrate dev

   Inicie o servidor:
   npm start
   ```
O servidor estará disponível no endereço http://localhost:3000.

📚 Endpoints
Abaixo está uma lista básica dos principais endpoints da API:

```bash
GET /users - Lista todos os usuários
GET /users/:id - Exibe detalhes de um usuário específico
POST /users - Cria um novo usuário
PUT /users/:id - Atualiza um usuário existente
DELETE /users/:id - Remove um usuário
```
