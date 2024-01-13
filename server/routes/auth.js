const router = require("express").Router();
const {User} = require("../model/user");
const joi = require("joi");
const bcrypt = require("bcrypt");

router.post("/", async (req, res)=>{
    try {

        const {error} = validate(req.body);
        if(error){
            return res.status(400).send({message : error.details[0].message});
        }

        // finding user in the database
        const user = await User.findOne({email : req.body.email});
        if(!user)
            return res.status(401).send({message : "Invalid Email."});
        
        // comparing the password with the database password...
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword)
            return res.status(401).send({message : "Invalid Password."});

        // generating token...
        const token = user.generateAuthToken();

        res.status(200).send({data : token, message: "Logged In successfully."});

    } catch (error) {
        return res.status(500).send({message : "Internal Server Error."});
    }
})

const validate = (data) =>{
    const schema = joi.object({
        email : joi.string().email().required().label("Email"),
        password : joi.string().required().label("Password")
    })

    return schema.validate(data);
}

module.exports = router;