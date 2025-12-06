# 📚 API Biblioteca

Uma API RESTful simples para gerenciamento de livros, desenvolvida em **Node.js**, **TypeScript** e **TypeORM**.

Esta API permite o cadastro, listagem, atualização e exclusão de livros, ideal para servir como *backend* para aplicações *frontend* como um app mobile (Expo/React Native) ou uma interface web.

## 💻 Tecnologias Utilizadas

O projeto foi construído sobre a seguinte stack:

* **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (v5.x)
* **Ambiente de Execução:** [Node.js](https://nodejs.org/) (v18+)
* **Framework Web:** [Express](https://expressjs.com/pt-br/)
* **ORM (Mapeamento Objeto-Relacional):** [TypeORM](https://typeorm.io/)
* **Banco de Dados:** MySQL (configurável para PostgreSQL, SQLite, etc.)

---

## 🚀 Funcionalidades da API RESTful

A sua API é baseada no padrão **CRUD** (Create, Read, Update, Delete) para o gerenciamento completo de livros:

| Ação CRUD | Funcionalidade | Método HTTP | Endpoint (Exemplo) |
| :--- | :--- | :--- | :--- |
| **C**reate | Adiciona um **novo livro** ao banco de dados. | `POST` | `/livros` |
| **R**ead | Retorna a **lista completa** de todos os livros ou os detalhes de um livro específico. | `GET` | `/livros` ou `/livros/:id` |
| **U**pdate | Permite **modificar** os dados de um livro existente. | `PUT` ou `PATCH` | `/livros/:id` |
| **D**elete | **Remove** um registro de livro do sistema de forma permanente. | `DELETE` | `/livros/:id` |

 ---
 ## 💡 Observações sobre o Banco

- SQLite atende os requisitos de banco relacional do exercício

- TypeORM garante o mapeamento objeto-relacional

- CRUD completo implementado e testado

--- 
## ⚙️ Configuração e Instalação

Siga estes passos para ter o projeto rodando localmente.

### Pré-requisitos

* Node.js (versão 18 ou superior)
* NPM (gerenciador de pacotes)
* Um servidor de Banco de Dados MySQL (ou Docker/serviço equivalente)


1. **Clone o repositório**
   ```bash
   git clone [https://github.com/WedjaSousa/API.Biblioteca.git](https://github.com/WedjaSousa/API.Biblioteca.git)
    ```
2. **Instale as dependências**
    ```bash
    npm install
    ```
3. **Configure o Banco de Dados**
    ```bash
    Certifique-se de ter o MySQL rodando.
    Configure as credenciais no arquivo: src/data-source.ts.
    ```
4. **Inicie o servidor**
    ```bash
    npm start

---

<div align="center">
 Projeto desenvolvido por <em><a href="https://github.com/WedjaSousa">Wedja Sousa</a> em 06/12/2025.</em>
</div>
     ```

