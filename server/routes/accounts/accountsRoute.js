const express = require('express');
const { createAccountCtrl, 
        fetchAccountCtrl, 
        deleteAccountCtrl,
        updateAccountCtrl,
        fetchAccountsCtrl,

    } = require('../../controllers/accounts/accountsCtrl');
const isLogin = require('../../middlewares/isLogin');

const accountsRoute = express.Router();


//POST/api/v1/accounts
accountsRoute.post('/', isLogin, createAccountCtrl);

//GET/api/v1/accounts/:id
accountsRoute.get('/:id', fetchAccountCtrl);

//GET/api/v1/accounts/
accountsRoute.get('/', fetchAccountsCtrl);

//DELETE/api/v1/accounts/:id
accountsRoute.delete('/:id', isLogin, deleteAccountCtrl);

//PUT/api/v1/accounts/:id
accountsRoute.put('/:id', isLogin, updateAccountCtrl);



module.exports = accountsRoute;