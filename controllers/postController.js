const mongoose = require('mongoose')
const Post = mongoose.model('Post')


exports.add = (req, res) => {
    res.render('postAdd')
}
 
exports.addAction =  async (req, res) => {
    //req.body → requisição post usamos 'body' ao invés de 'query'
    const post = new Post(req.body)
    
    try{
        await post.save();
    } catch(error) {
        req.flash('error', 'Erro: '+ error.message) 
        res.redirect('/post/add') 
        return false;  //mata a execução da função
    }


    // req.flash([type], msg)
    req.flash('success', 'You post was saved ! =) ')

    res.redirect('/');


}