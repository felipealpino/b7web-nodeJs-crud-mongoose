const express = require('express')
const homeController = require('../controllers/homeController')
const userController = require('../controllers/userController')
const postController = require('../controllers/postController')
const imageMiddleware = require('../middlewares/imageMiddleware')
const { isLogged } = require('../middlewares/authMiddleware')

/**
 * puxar middlaware authMiddlaware
 * add when its necessary
 * 
 */

//Rotas   
const router = express.Router();  
 
router.get('/', homeController.index)

router.post('/', homeController.buscaTags)

router.get('/users/signin', userController.signin) 

router.post('/users/signin', userController.signinAction) 

router.get('/users/signup', userController.signup)

router.post('/users/signup', userController.signupAction)

router.get('/users/logout', userController.logoutAction)

router.get('/post/add',
    isLogged,
    postController.add
)

router.post('/post/add',
    isLogged,
    imageMiddleware.upload,
    imageMiddleware.resize,
    postController.addAction
)

router.get('/post/:slug/edit',
    isLogged,
    postController.edit
)

router.post('/post/:slug/edit',
    isLogged,
    imageMiddleware.upload,
    imageMiddleware.resize,
    postController.editAction
)

router.get('/post/:slug/delete',
    isLogged,
    postController.deleteAction
)

router.get('/post/:slug', postController.seePost)

module.exports = router;  