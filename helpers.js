
exports.defaultPageTitle = 'tituloDefault'  

exports.menu = [
    {
        name:'Home',
        slug:'/',
        guest:true,
        logged:true,
    },
    {
        name:'Login',
        slug:'/users/signin',
        guest:true,
        logged:false,
    },
    {
        name:'Cadastro',
        slug:'/users/signup',
        guest:true,
        logged:false,
    },
    {
        name:'Adicionar Post',
        slug:'/post/add',
        guest:false,
        logged:true,
    }
]