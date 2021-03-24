const express = require('express')
const mustache = require('mustache-express')
const router = require('./routes/index')
const helpers = require('./helpers')

//Configurações 
const app = express();
app.use((req,res,next)=> { //tem que ser antes da definição das rotas 
    res.locals.helpers = helpers;
    res.locals.teste = 'testando123testando';
    next();
})
app.use(express.json()) //body-parser (old library)

app.use('/', router)
  
app.engine('mst', mustache(__dirname+'/views/partials', '.mst')) // extensão do arquivo, rodar a varaivel como função
app.set('view engine', 'mst');
app.set('views', __dirname+'/views') // __dirname = diretório absoluto


module.exports = app;    