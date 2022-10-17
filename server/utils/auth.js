const jwt = require("jsonwebtoken");
require("dotenv").config()

const secret = "shh";
const expiration = "24h";

module.exports = {
    signToken: function(info) {
        const payload = info;
        console.log(payload)
        return jwt.sign({data: payload}, process.env.SECRET_KEY, {expiresIn: expiration})
    }
}