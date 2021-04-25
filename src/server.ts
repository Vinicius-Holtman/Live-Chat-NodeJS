import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";

http.listen(3333);
console.log("conectado");

// GET = Buscas
// POST = Criar
// PUT = Alteracao
// DELETE = Deletar
// PATCH = Alterar um dado especifico