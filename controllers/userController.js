const User = require("../models/User")
const bcrypt = require('bcrypt')

exports.signin = (req,res) => { 
    res.render('signin') 
}

exports.signinAction = (req, res) => {
    const {email, password} = req.body
    if(!email || !password){
        req.flash('error','preenche tudo ai filho da puta')
    }

    User.findOne({'email': email}, function (err, dados) {
        bcrypt.compare(password, dados.password, (error, resposta) => {
            // resposta == true ou resposta == false
            if(resposta){
                req.login(dados, () => {} )
                res.redirect('/')
            } else {
                req.flash('error', 'Errou a senha Jão ( ͡❛  ͟ʖ ͡❛)')
                res.redirect('signin')
            }
        })
    })

}

exports.signup = (req, res) =>{
    res.render('signup')
}

exports.signupAction = async (req, res) => {
    const {email, name, password, password2} = req.body

    if((!email) || (!name) || (!password) || (!password2)){
        req.flash('error', 'Fields can not be empty')
        res.redirect('signup')
        return false
    } 

    if(password != password2){
        req.flash('error', 'Passwords must be the same')
        res.redirect('signup')
        return false
    } else {
        delete req.body.password2
        req.body.password = await bcrypt.hash(req.body.password, 10)
    }

    const user = new User(req.body)
    await user.save();
    console.log(user)
    req.flash('success', 'User successfully created! Go '+name+' (ง ͡❛ ͜ʖ ͡❛)ง')
    res.redirect('signin')
}

exports.logoutAction = (req, res) => {
    req.logout()
    res.redirect('/')
}