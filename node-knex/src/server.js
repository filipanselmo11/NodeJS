const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);


//catch all

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error,req, res, next) => {
    res.status(error.status || 500)
    res.json({ error: error.message })
});


app.listen(3333, () => console.log("Servidor rodando"));