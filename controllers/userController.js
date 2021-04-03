const User = require("../models/User")
const bcrypt = require('bcrypt')

exports.signin = (req,res) => { 
    res.render('signin') 
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
