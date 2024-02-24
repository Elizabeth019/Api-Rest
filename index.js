import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.json());

const readData = () =>{
 try {
  const data =fs.readFileSync('./db.json');
  return JSON.parse(data);
 } catch (error) {
  console.log(error);
 }
}

app.get('/', (req, res)=>{
  res.send('Mi Api con Nodejs')
});

app.get('/usuarios', (req, res)=>{
  const users= readData();
   res.json(users);
})


app.listen(3000, ()=>{
  console.log("Servidor corriendo en el puerto 3000")
});