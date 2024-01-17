const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const taskController = require('../controllers/taskController')
const loginController = require('../controllers/loginController')
const registerController = require('../controllers/registerController')

router.post('/register', registerController.registerUser);

router.post('/login', loginController.postLogin)

router.get('/users', userController.getUsers)
router.get('/users/:id', userController.getUserById)
router.put('/users/:id', userController.updateUserById)
router.delete('/users/:id', userController.deleteUserById);

router.post('/task', taskController.addTask)
router.get('/tasks', taskController.getTask)
router.get('/task/:id', taskController.getTaskById)
router.put('/task/:id', taskController.updateTaskById)
router.delete('/task/:id', taskController.deleteTaskById)

module.exports = router;