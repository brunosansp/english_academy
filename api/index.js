const express = require('express')
const routes = require('../api/routes/index.js')

const app = express();
const port = 3001;

routes(app);

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app