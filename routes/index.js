const express = require('express')

//Rotas 
const router = express.Router();
router.get('/', (req,res) => { 
    res.render('home', {
        'nome':'Felipe',
        'idade':25, 
        'sobrenome':'Gontijo', 
        'profissao':'estudante'
    }); //segundo parametro seria os dados para enviar para /views/home
})

module.exports = router;