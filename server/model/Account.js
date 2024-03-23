const mongoose = require('mongoose');


//Account Schema
const accountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    accountType: {
        type: String,
        enum: [
            "Savings",
            "Investement",
            "Checking",
            "Credit Card",
            "School",
            "Education",
            "Project",
            "Utilities",
            "Travel",
            "Personal",
            "Groceries",
            "Entertainment",
            "Loan",
            "Cash Flow",
            "other", 
        ],
        required: true,
    },
    initialBalance: {
        type: Number,
        default: 0
    },
    transactions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
    }],
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    notes:{
        type: String,
        required: true
    }
},{
    timestamps: true,
    toJSON: {virtuals: true}
});



//model
const Account = mongoose.model("Account", accountSchema);


module.exports = Account;