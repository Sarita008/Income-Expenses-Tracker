const express = require('express');
const isLogin = require('../../middlewares/isLogin');
const { registerUserCtrl, 
        userLoginCtrl,
        userProfileCtrl,
        deleteUserCtrl,
        updateUserCtrl      
    } = require('../../controllers/users/usersCtrl');


const usersRoute = express.Router();


//POST/api/v1/users/register
usersRoute.post("/register", registerUserCtrl);

//POST/api/v1/users/login
usersRoute.post("/login", userLoginCtrl);

//GET/api/v1/users/profile
usersRoute.get('/profile', isLogin, userProfileCtrl);

//DELETE/api/v1/users
usersRoute.delete('/', isLogin, deleteUserCtrl);

//PUT/api/v1/users/
usersRoute.put('/', isLogin, updateUserCtrl);


module.exports = usersRoute;