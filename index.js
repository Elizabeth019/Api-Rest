import express from 'express';
import fs from 'fs';



const app = express();

app.get('/', (req, res)=>{
  res.send('Mi Api con Nodejs')
});



app.listen(3000, ()=>{
  console.log("Servidor corriendo en el puerto 3000")
})