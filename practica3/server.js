const {app} = require('./index');

const server = app.listen(process.env.PORT, ()=>{
  console.log(`Servidor corriendo!!`);
})


module.exports= server