const express = require('express')
const homeController = require('../controllers/homeController')
const userController = require('../controllers/userController')

//Rotas 
const router = express.Router(); 

router.get('/', homeController.userMiddleware, homeController.index)
router.get('/users/signin', userController.signin)
router.get('/users/signup', userController.signup)

module.exports = router;