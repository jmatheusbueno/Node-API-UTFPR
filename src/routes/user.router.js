const { Router } = require('express');
const { userController } = require('../controllers/user.controller');

const userRouter = Router();

userRouter.use(
    '/users',
    userRouter.get('/all', userController.getUsers),
    userRouter.post('/', userController.createUser),
    userRouter.put('/:id', userController.updateUser),
    userRouter.delete('/:id', userController.deleteUser),
)

module.exports = {
    userRouter,
};