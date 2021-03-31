const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //pode user ES6 - await, Promises
const slug = require('slug')

/**Um Post tem:
 * Titulo 
 * Corpo
 * Tags 
 * Slug
 */

// fazendo o schema da tabela
const postSchema = new mongoose.Schema({
    photo:String,
    title:{
        type: String,
        trim: true,
        required:true,
    },
    slug:{
        type:String,
    },
    body:{
        type:String,
        trim:true,
        required:true,
    },
    tags:[String]
});


//Antes de salvar, execute a função
// postSchema.pre('save', function(next){

// })

// criando o banco
module.exports = mongoose.model('Post', postSchema)