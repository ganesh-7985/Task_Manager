const express = require("express");
const app = express();
app.use(express.json());
const { User } = require("../database/db")

const jwt = require("jsonwebtoken");

function userAuthentication(req,res,next){
    const username=req.headers.username;
    const password=req.headers.password;

    
}