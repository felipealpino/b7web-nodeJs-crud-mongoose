const express = require('express')

//Rotas 
const router = express.Router();

    

router.get('/', (req,res) => { 
    
    const obj = {
        'nome':'Felipe',
        'idade':25, 
        'sobrenome':'Gontijo', 
        'profissao':'estudante',
        'empregado': true,
        'materiais': [
            {
                nome:'Lapis',
                quant:2,
            }, 
            {
                nome:'Borracha',
                quant:1,
            },
            {
                nome:'Caneta', 
                quant:5, 
            }, 
        ],
        'interesses': ['node', 'js', 'laravel', 'php']
    }

    res.render('home', obj); //segundo parametro seria os dados para enviar para /views/home
})

module.exports = router;  