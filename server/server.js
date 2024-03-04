require("dotenv").config();
require("./config/dbConnect");
const express = require('express');
const cors = require('cors');
const usersRoute = require('./routes/users/usersRoutes');
const accountsRoute = require('./routes/accounts/accountsRoute');
const transactionsRoute = require('./routes/transactions/transactionsRoute');
const globalErrHandler = require("./middlewares/globalErrHandler");

const app = express();

//middleware
app.use(express.json()); //pass the incoming data

//cors middleware
app.use(cors());


//routes

//users route
app.use("/api/v1/users", usersRoute);


//accunt routes
app.use("/api/v1/accounts", accountsRoute);


//transactions routes
app.use("/api/v1/transactions", transactionsRoute);


//Error Handlers
app.use(globalErrHandler);

//Listen to server
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server in up and running on port ${PORT}`));