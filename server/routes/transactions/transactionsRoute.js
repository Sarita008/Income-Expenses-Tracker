const express = require('express');
const { createTransactionCtrl, 
        fetchTransactionsCtrl,
        fetchTransactionCtrl,
        deleteTransactionCrtl,
        updateTransactionCtrl,

    } = require('../../controllers/transactions/transactionsCtrl');
const isLogin = require('../../middlewares/isLogin');

const transactionsRoute = express.Router();



//POST/api/v1/transactions
transactionsRoute.post('/', isLogin, createTransactionCtrl);

//GET/api/v1/transactions
transactionsRoute.get('/', fetchTransactionsCtrl);

//GET/api/v1/transactions/:id
transactionsRoute.get('/:id', fetchTransactionCtrl);

//DELETE/api/v1/transactions/:id
transactionsRoute.delete('/:id', isLogin, deleteTransactionCrtl);

//PUT/api/v1/transactions/:id
transactionsRoute.put('/:id', isLogin, updateTransactionCtrl);


module.exports = transactionsRoute;