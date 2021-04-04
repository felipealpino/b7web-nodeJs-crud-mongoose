const express = require('express')
const homeController = require('../controllers/homeController')
const userController = require('../controllers/userController')
const postController = require('../controllers/postController')
const imageMiddleware = require('../middlewares/imageMiddleware')

//Rotas   
const router = express.Router();  
 
router.get('/', homeController.userMiddleware, homeController.index)
router.post('/',homeController.buscaTags)
router.get('/users/signin', userController.signin) 
router.post('/users/signin', userController.signinAction) 
router.get('/users/signup', userController.signup)
router.post('/users/signup', userController.signupAction)
router.get('/post/add', postController.add)
router.post('/post/add',
    imageMiddleware.upload,
    imageMiddleware.resize,
    postController.addAction
)

router.get('/post/:slug/edit', postController.edit)
router.post('/post/:slug/edit',
    imageMiddleware.upload,
    imageMiddleware.resize,
    postController.editAction
)

router.get('/post/:slug/delete', postController.deleteAction)

router.get('/post/:slug', postController.seePost)

module.exports = router;  