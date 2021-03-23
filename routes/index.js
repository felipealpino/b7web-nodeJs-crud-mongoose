const express = require('express')

//Rotas 
const router = express.Router();
router.get('/', (req,res) => {
    res.send('Hello World! Está na pagina raiz')
})

router.get('/sobre', (req, res) => {
    res.send('Pagina sobre');
})

module.exports = router; 