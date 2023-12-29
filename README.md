# Aplicação do Estilo Arquitetural REST com Node.js

Bem-vindo ao repositório do projeto do Curso @digitalinnovationone sobre a criação de um microserviço utilizando Node.js para implementação de autenticação JWT, utilizando também PostgreSQL e Express.

## Descrição do Projeto

Este projeto é parte do curso ministrado pela Digital Innovation One, focado na aplicação do Estilo Arquitetural REST. O objetivo principal é criar um microserviço utilizando Node.js para implementar autenticação JWT, utilizando PostgreSQL como banco de dados e Express como framework web.

## Tecnologias Utilizadas

- **Node.js:** Plataforma de execução de JavaScript no lado do servidor.
- **PostgreSQL:** Sistema de gerenciamento de banco de dados relacional.
- **Express:** Framework web para Node.js que facilita a criação de aplicativos web.

## Funcionalidades Principais

1. **Autenticação JWT:** Implementação de autenticação baseada em JSON Web Tokens (JWT) para garantir a segurança da aplicação.

2. **Banco de Dados PostgreSQL:** Utilização do PostgreSQL para armazenamento e gerenciamento de dados relacionados à autenticação.

3. **Express Framework:** Desenvolvimento da aplicação web utilizando o framework Express, facilitando a criação de rotas e o manuseio de requisições HTTP.

## Instruções de Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/miguelhp373/dio-explorando-estilo-arquitetural-rest-com-node-js
   ```

2. **Instale as dependências:**

   ```bash
   cd dio-explorando-estilo-arquitetural-rest-com-node-js
   npm install
   ```

3. **Configure o banco de dados PostgreSQL e ajuste as configurações no arquivo `config/database.js`**.

4. **Inicie a aplicação:**

   ```bash
   npm start
   ```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Rotas

- **GET /users:** Retorna a lista de usuários.
- **GET /users/:uuid:** Retorna as informações do usuário com o UUID especificado.
- **POST /users:** Cria um novo usuário.
- **PUT /users/:uuid:** Atualiza as informações do usuário com o UUID especificado.
- **DELETE /users/:uuid:** Exclui o usuário com o UUID especificado.

- **POST /token** Utilizado para autenticação, ou seja obtenção do token
- **POST /token/validate** Utilizado para validar o token

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues para reportar problemas, sugestões ou melhorias. Se preferir, faça um fork do projeto, implemente as mudanças e envie um pull request.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
