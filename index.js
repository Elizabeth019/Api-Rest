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
};

const writeData = (data) => {
  try {
    fs.writeFileSync('./db.json', JSON.stringify(data));
    
  } catch (error) {
    console.log(error);
  }
}


app.get('/', (req, res)=>{
  res.send('Mi Api con Nodejs')
});

app.get('/users', (req, res)=>{
  const users= readData();
   res.json(users);
});

app.get('/users/:id', (req, res)=>{
  const data=readData();
  const id = parseInt(req.params.id);
  const title= data.find((title)=> title.id === id);
  res.json(title);
});

app.post('/users', (req, res) =>{
  const data = readData();
  const body= req.body;
  const newUser = {
    id: data.length +1,
    ...body
  };
  data.push(newUser);
  writeData(data);
  res.json(newUser);
});

app.put ('/users/:id', (req, res) =>{
  const data= readData();
  const body= req.body;
  const id= parseInt(req.params.id);
  const userIndex= data.findIndex((user)=> user.id === id);
  data[userIndex] = {
    ...data[userIndex],
    ...body,
  }
  writeData(data);
  res.json({message:'User Modificado'})
});



app.listen(3000, ()=>{
  console.log("Servidor corriendo en el puerto 3000")
});