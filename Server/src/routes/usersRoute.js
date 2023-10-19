const {Router}= require('express');
const user = Router();

// const {userId, }



user.get("/", (req, res) => {
  res.send("Hello user");
});

user.post("/", (res, req) => {
  res.send("Has creado un usuario");
})

module.exports = user;