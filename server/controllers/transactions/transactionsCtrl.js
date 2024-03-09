const Account = require("../../model/Account");
const Transaction = require("../../model/Transaction");
const User = require("../../model/User");
const { AppErr } = require("../../utils/appErr");


//create
const createTransactionCtrl =  async(req, res, next)=>{
    const { name, amount, notes, transactionType, account, category } = req.body;
    try {
        //1. find user
        const userFound = await User.findById(req.user);
        if(!userFound){
            return next(new AppErr("User not found",404));
        }
        //2. find account
        const accountFound = await Account.findById(account);
        if(!accountFound){
            return next(new AppErr("Account not found",404));
        }
        //3. create transaction
        const transaction = await Transaction.create({
            name,
            transactionType,
            amount,
            category,
            account,
            notes,
            createdBy: req.user,
        })
        //4. Push the transaction to account
        accountFound.transactions.push(transaction._id);
        //5. resave the account
        await accountFound.save();

        res.json({
            status: "success",
            data: transaction,
        });
    } catch (error) {
        next(new AppErr(error.message, 500));
    }
};

//fetch all 
const fetchTransactionsCtrl = async(req, res, next)=>{
    try {
        const trans = await Transaction.find();
        res.status(200).json({
            status: "success",
            data: trans,
        })
    } catch (error) {
        next(new AppErr(error.message, 500));
    }
};

//fetch single
const fetchTransactionCtrl = async(req, res, next)=>{
    try {
        const {id} = req.params;
        const trans = await Transaction.findById(id);
        res.status(200).json({
            status: "success",
            data: trans,
        })
    } catch (error) {
        next(new AppErr(error.message, 500));
    }
};

//delete
const deleteTransactionCrtl = async(req, res, next)=>{
    try {
        const {id} = req.params;
        await Transaction.findByIdAndDelete(id)
        res.json({
            status: "success",
            data: null,
        })
    } catch (error) {
        next(new AppErr(error.message, 500));
    }
};

//update
const updateTransactionCtrl = async(req, res, next)=>{
    try {
        const {id} = req.params;
        const trans = await Transaction.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });
        res.json({
            status: "success",
            data: trans,
        })
    } catch (error) {
        next(new AppErr(error.message, 500));
    }
};


module.exports = {
    createTransactionCtrl,
    fetchTransactionsCtrl,
    fetchTransactionCtrl,
    deleteTransactionCrtl,
    updateTransactionCtrl
}