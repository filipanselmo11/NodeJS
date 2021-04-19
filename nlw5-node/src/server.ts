import express from 'express';

const app = express();

/**
 * GET = Buscas 
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação específica
 */

app.get("/", (request, response) => {
    return response.json({
        message: "Olá nlw 05"
    })
});

app.post("/users", (request, response) => {
    return response.json({
        message: "Usuário criado com sucesso!"
    })
});


app.listen(3333, () => console.log("Servidor está rodando na porta 3333"));
//missaoespacial