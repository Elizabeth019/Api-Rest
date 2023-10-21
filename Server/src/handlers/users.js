//const { createUser } = require('../controllers/users');
const {Users}= require('../db');

const userId = async (req, res) =>{
  const {id}= req.params;



};

const newUser = async (name, email, password, typeUser) =>{

//const {name, email, password, typeUser} = req.body;
  // try{
  //   const user  = await createUser(name, email, password, typeUser);
  //   console.log("nuevo", user);
  //   res.status(200).json(user);
  // }catch(error){
  //   res.status(400).json({message: "error"});
  // }

  
     //let user = 
     await Users.create({name, email, password, typeUser});
    
    
     
}






module.exports={
  userId,
  newUser
}