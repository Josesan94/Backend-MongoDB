var express = require('express');
var userController = require('../controllers/user');
var api = express.Router();

//api.get('/users', userController
//api.get('/users', userController.getUsers);

//api.get('/user', userController.getUser);
//api.delete('/user', userController.deleteUser)
    
api.post('/add-user', userController.addUser);
api.get('/users', userController.getUsers);
api.get('/user/:id',userController.getUser);


module.exports = api;