/**
 * isLogged
 * passport - req.isAuthenticated() : boolean
 * 
 */
module.exports.isLogged = (req, res, next) => {
    if(!req.isAuthenticated()) { 
        req.flash('error', 'Gotta be logged')
        res.redirect('/users/signin')
    }
}