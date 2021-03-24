const mongoose = require('mongoose')
const Post = mongoose.model('Post') // instanciando a tabela 

exports.userMiddleware = (req, res, next) =>{
    let info = {
        id: 123,
        name: 'Felipe (estou no homeController)',
    } 
    req.userInfo = info; 
    next();
}
  
 
exports.index = async (req,res) => { 
    const posts = await Post.find(); //retorna todos os dados 
    const dados = { 
        pageTitle: 'Titulo preenchido',  
        userInfo:req.userInfo,
        posts: posts, 
    }

    res.render('home', dados); //segundo parametro seria os dados para enviar para /views/home
}



  