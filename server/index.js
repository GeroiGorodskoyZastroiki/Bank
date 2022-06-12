const express = require("express");
const mongoose = require("mongoose");
const router = require("./router.js");

const port = 5000;

const app = express();

app.use(express.json());

app.use("/api", router);

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/bank", () => {
            console.log("Database connected");
        });
    } catch (error) {
        console.log(error);
    }
}

const serverListen = () => {
    try {
        app.listen(port, () => {
            console.log(`Server started on port: ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

const start = () => {
    try {
        connectDB();
        serverListen();
    } catch (error) {
        console.log(error);
    }
}

start();