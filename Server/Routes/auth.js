const router = require('express').Router();
const mongoose = require('mongoose');
const db = 'mongodb://localhost:27017/todo';
// Importation du model
const userSchema = require('../models/user');

// Connection au base de donnee
mongoose.connect(db, (err) => {
    console.log("Database connection in port 27017")
})
// Collection dans la base de donnee
const userModel = mongoose.model('users', userSchema)

//Test backend
router.get('/', (req, res) => {
    {
        res.status(200).send('Home Application');
    };
    (error) => {
        res.sendStatus(500)
        console.error(error)
    }
});

// Enregistrement nouveau utilisateur
router.post('/register', (req, res) => {
    {
        var newUser = new userModel(req.body);
        newUser.save();
        res.status(200).send('Success register');
    };
    (error) => {
        res.sendStatus(500)
        console.error(error)
    }
});

//s'identifier
router.post('/login', async(req, res) => {
    const result = await userModel.findOne({
        email: req.body.email
    });
    if(result.password !== req.body.password){res.send({message:'not ok'})}
    res.send({message:'ok'})
});




module.exports = router;