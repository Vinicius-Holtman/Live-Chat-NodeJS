import express from "express";
import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

// GET = Buscas
// POST = Criar
// PUT = Alteracao
// DELETE = Deletar
// PATCH = Alterar um dado especifico

app.listen(3333);
console.log("conectado");