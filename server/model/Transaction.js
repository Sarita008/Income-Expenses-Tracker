const mongoose = require('mongoose');


//Transaction Schema
const transactionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    transactionType: {
        type: String,
        enum: ["Income", "Expenses"],
        required: true,
    },
    amount: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: [
            "Food",
            "Transaction",
            "Entertainment",
            "Shopping",
            "Utilities",
            "Health",
            "Travel",
            "Education",
            "Personal",
            "Groceries",
            "Bills",
            "Building",
            "Uncategorized"
        ],
        required: true,
    },
    color:{
        type: String,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    date:{
        type: Date,
        default: Date.now(),
    },
    notes:{
        type: String,
        required: true,
    }
},{
    timestamps: true,
    toJSON: {virtuals: true}
});



//model
const Transaction = mongoose.model("Transaction", transactionSchema);


module.exports = Transaction;