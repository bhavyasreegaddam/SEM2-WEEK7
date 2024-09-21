var express = require('express');
var router = express.Router();
const authenticateAdmin = require('../middleware/authentication.cjs')
const {addAdmin} = require('../controllers/queries.cjs');

//Login route
router.post('/login', async(req,res)=>{
    const { username, password}= req.body;
    console.log("Got data from admin login");

    try{
        const result = await authenticateAdmin(username, password);
        res.send(result);
    }catch(error) {
        console.log('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

//Route for adding a new admin
router.post('/add', async(req,res)=>{
    const{ username, password } = req.body;
    try{
        const savedAdmin = await addAdmin(username, password);
        console.log(savedAdmin);

        res.status(201).send(savedAdmin);
    }   catch(error){
        console.log('Error adding admin:', error.message);
        res.status(500).send('Internal Server Error');
    }
});
module.exports=router;