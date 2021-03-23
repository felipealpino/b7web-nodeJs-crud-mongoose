const express = require('express')

//Rotas 
const router = express.Router();
router.get('/', (req,res) => {
    // /?nome=Felipe&idade=25
    let nome = req.query.nome
    let idade = req.query.idade

    res.json(req.query)
})

router.get('/posts/:id', (req,res) => {
    let id = req.params.id
    res.send('Id do post'+ id) 
})

router.get('/sobre', (req, res) => {
    res.send('Pagina sobre');
})

module.exports = router; 