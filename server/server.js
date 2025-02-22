import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/config.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;


app.listen(port,()=>{
    console.log(`Server is Running on port: ${port} `)
    connectDb()
})