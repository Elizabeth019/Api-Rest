const {Router}= require('express');
const { newUser}  = require('../handlers/users');
const user = Router();

// const {userId, }



user.get("/", (req, res) => {
  res.send("Hello user");
});

user.post("/", async(req, res) => {
  //console.log("Has creado un usuario");
  const {name, email, password, typeUser} = req.body;
  
  try{
    const user  = await newUser(name, email, password, typeUser);
    console.log("nuevo usuario", name);
    res.status(200).send("Has creado un usuario");
  }catch(error){
    res.status(400).json({message: error.message});
  }
})

module.exports = user;