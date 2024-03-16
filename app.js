const express = require('express');

const app = express();
const { dbConnetion } = require('./database/config');

require('dotenv').config();

app.use(express.json());
dbConnetion();

app.use("/admin" , require ('./router/adminRouter'));

app.listen(process.env.PORT,() =>{
    console.log(`ejecutandose en puerto ${process.env.PORT}`);
});