const express = require('express')
const mustache = require('mustache-express')
const router = require('./routes/index')
const helpers = require('./helpers')
const errorHandler = require('./handlers/errorHandlers')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const flash = require('express-flash')

const app = express();

app.use(express.json()) //body-parser (old library)
app.use(express.urlencoded({extended:true}))

app.use(cookieParser(process.env.SECRET)); //habilitando cookie
app.use(session({
    secret:process.env.SECRET,
    resave:false, //fala pra sessão que nao precisa ser destruida e recriada
    saveUninitialized:false, 
}))
app.use(flash()); 

//Configurações 
app.use((req,res,next)=> { //tem que ser antes da definição das rotas 
    res.locals.helpers = helpers;       //pega infos do arquivo helpers.js
    res.locals.flashes = req.flash();   //pega todas as mensagens e salva em flashes
    res.locals.teste = 'testando123testando';
    next();
})



app.use('/', router) 

app.use(errorHandler.notFound)
  
  
app.engine('mst', mustache(__dirname+'/views/partials', '.mst')) // extensão do arquivo, rodar a varaivel como função
app.set('view engine', 'mst');
app.set('views', __dirname+'/views') // __dirname = diretório absoluto


module.exports = app;    