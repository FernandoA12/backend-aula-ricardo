/**
 * MIDDLEWARE
 * funções injetadas antes de uma resposta final para tratamento de dados
 */

// Express biblioteca para trabalhar com backend
const express = require("express");
// Gera id unico
const { randomUUID } = require("node:crypto");

// Crio o meu server
const server = express();

const clients = [];

// Middleware para permitir a transição de jsons nas requisições
server.use(express.json());

// ROTA para criar cliente
server.post("/clients", (req, res) => {
  const client = {
    id: randomUUID(),
    ...req.body,
  };

  clients.push(client);

  res.status(201).json(client);
});

// Rota para ler a lista de clientes criados
server.get("/clients", (req, res) => {
  res.status(200).json(clients);
});

// Sobe o server na porta 3333
server.listen(3333, () => {
  console.log("Server listening on port 3333");
});
