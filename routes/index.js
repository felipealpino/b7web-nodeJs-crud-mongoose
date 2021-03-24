const express = require('express')
const homeController = require('../controllers/homeController')
const userController = require('../controllers/userController')
const postController = require('../controllers/postController')

//Rotas  
const router = express.Router(); 

router.get('/', homeController.userMiddleware, homeController.index)
router.get('/users/signin', userController.signin)
router.get('/users/signup', userController.signup)
router.get('/post/add', postController.add)
router.post('/post/add', postController.addAction)


module.exports = router; 