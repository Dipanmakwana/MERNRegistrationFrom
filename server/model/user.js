const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
    firstName : {type : String , required : true},
    lastName : String,
    email : String,
    password : String
})

// generating token for login
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({id : this.id}, process.env.JWTPRIVATEKEY,{expiresIn:"7d"});
    return token;
};

const User = mongoose.model("user", userSchema);

// defining validations...
const validation = (data) =>{
    const schema = joi.object({
        firstName : joi.string().required().label("First Name"),
        lastName : joi.string().required().label("Last Name"),
        email : joi.string().email().required().label("Email"),
        password : passwordComplexity().required().label("Password")
    });

    return schema.validate(data);
}

module.exports = {User, validation}; 

