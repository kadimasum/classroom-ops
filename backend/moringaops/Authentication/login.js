const bcrypt = require("bcrypt");
// const md5 = require("md5");
const mysql = require("mysql");
const configurationVars = require("../configuration/constants")

function loginUser(req,res){
    console.log("From auth");
    return res.json({
        msg: "From Auth!"
    })
}


module.exports = { loginUser }
