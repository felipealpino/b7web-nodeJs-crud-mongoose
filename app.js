const express = require('express')
const mustache = require('mustache-express')
const router = require('./routes/index')

//Configurações 
const app = express();
app.use('/', router)

app.use(express.json()) //body-parser (old library)

app.engine('mst', mustache(__dirname+'/views/partials', '.mst')) // extensão do arquivo, rodar a varaivel como função
app.set('view engine', 'mst');
app.set('views', __dirname+'/views') // __dirname = diretório absoluto


module.exports = app;    