const express = require("express"),
app = express(),
dotenv = require("dotenv");

dotenv.config();

const consumer = require("./kafka/consumer");
consumer();
app.use(express.json());

const PORT = process.env.PORT || 3002;


app.listen(PORT, () => {
    console.log(`The application is running on localhost ${PORT}`);
});