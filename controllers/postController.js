const mongoose = require('mongoose')
const Post = mongoose.model('Post')


exports.add = (req, res) => {
    res.render('postAdd')
}
 
exports.addAction =  async (req, res) => {
    //req.body → requisição post usamos 'body' ao invés de 'query'
    slugMade = req.body.title.split(' ').join('-').toLowerCase();
    console.log(slugMade)
    const post = new Post({
        title:req.body.title, 
        body:req.body.body,
        slug:slugMade
    })
    
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