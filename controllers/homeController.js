exports.userMiddleware = (req, res, next) =>{
    let info = {
        id: 123,
        name: 'Felipe',
    }
    req.userInfo = info; 
    next();
}


exports.index = (req,res) => { 
    const obj = {
        pageTitle: 'Titulo preenchido',  
        userInfo:req.userInfo,

    }
    res.render('home', obj); //segundo parametro seria os dados para enviar para /views/home
}

  