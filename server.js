const mongoose = require('mongoose')

require('dotenv').config({path:'variables.env'});

//DATABASE CONNECTION 
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise //pode user ES6 - await, Promises
mongoose.connection.on('error', (error) => {
    console.error("Erro: "+error.message);
});
 
// Carregando todos os models
require('./models/Post');
const app = require('./app');

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
    console.log("Server running on :"+server.address().port)
});