const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //pode user ES6 - await, Promises

/**Um Post tem:
 * Titulo
 * Corpo
 * Tags
 * Slug
 */

// fazendo o schema da tabela
const postSchema = new mongoose.Schema({
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

// criando o banco
module.exports = mongoose.model('Post', postSchema)