import express from "express";
const app = express();

// GET = Buscas
// POST = Criar
// PUT = Alteracao
// DELETE = Deletar
// PATCH = Alterar um dado especifico

app.get("/", (req, res) => {
    return res.json({
        message: "Foquete nao tem ré",
    }); 
});

app.post("/", (req, res) => {
    return res.json({
        message: "Usuario Salvo!",
    })
});

app.listen(3333);
console.log("conectado");