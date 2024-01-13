// registration form detail...

const router = require("express").Router();
const { User, validation } = require("../model/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res)=>{
    try {

        // entered details are valid or not...
        const {error} = validation(req.body);
        if(error){
            return res.status(400).send({message : error.details[0].message});
        }

        // checking the user already exist or not...
        const user = await User.findOne({email : req.body.email});
        if(user){
            return res.status(409).send({message : "User with given email already exist."});
        }

        // hashing the password for security reason...
        const salt = await bcrypt.genSalt(Number(10));
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        
        // save the user in database...
        await new User({...req.body, password : hashPassword}).save();

        res.status(201).send({message : "User saved Successfully."});

    } catch (error) {
        res.status(500).send({message : `Internal server error: ${error}`});
    }
});

module.exports = router;

