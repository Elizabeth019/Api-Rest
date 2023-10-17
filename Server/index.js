const server = require('./src/app.js');
const {db} = require('./src/db');

db.sync({force:true}).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); 
  });
})