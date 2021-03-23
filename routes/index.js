const express = require('express')

//Rotas 
const router = express.Router();

router.get('/', (req,res) => { 
    
    const obj = {
        nome:'Felipe',
        pageTitle: 'Titulo preenchido',  
    }

    res.render('home', obj); //segundo parametro seria os dados para enviar para /views/home
})

module.exports = router;   