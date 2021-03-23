const express = require('express')
const router = require('./routes/index')


//Configurações
const app = express();
app.use('/', router)
app.use('/sobre', router)


app.use(express.json()) //body-parser (old library)
module.exports = app; 