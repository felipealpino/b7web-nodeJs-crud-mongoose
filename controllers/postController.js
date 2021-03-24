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

exports.edit = async (req, res) =>{
    const dados = await Post.findOne({
        slug: req.params.slug
    })
    res.render('postEdit', dados)
}

exports.editAction = async (req, res) =>{
    
    try{
        req.body.slug = req.body.title.split(' ').join('-').toLowerCase();
        const post = await Post.findOneAndUpdate(
            {slug:req.params.slug},
            req.body,
            {
                new:true, // feita essa alteração, retorna o novo post
                runValidators:true, //valida de acordo com o schema setado
            }, 
        );

        req.flash('success', 'Post updated =D')
        res.redirect('/')
    } catch(error){
        req.flash('error', 'Error: '+error.message)
        res.redirect('/post/'+req.params.slug+'/edit')
    }

}