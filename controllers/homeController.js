const mongoose = require('mongoose')
const Post = mongoose.model('Post') // instanciando a tabela 

  
exports.index = async (req,res) => { 
    const posts = await Post.find(); //retorna todos os dados 
    const dados = { 
        pageTitle: 'Titulo preenchido',  
        posts: posts, 
    }
    res.render('home', {
        dados:dados,
    }); //segundo parametro seria os dados para enviar para /views/home
}

exports.buscaTags = async (req, res) => {
    const posts = await Post.find().where({"tags": req.body.tags})
    
    const dados = { 
        pageTitle: 'Titulo preenchido',  
        userInfo:req.userInfo,
        posts: posts, 
    }

    res.render('home', {dados}); //segundo parametro seria os dados para enviar para /views/home
}


  