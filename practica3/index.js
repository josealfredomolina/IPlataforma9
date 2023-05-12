require('dotenv').config();
const express = require('express')
const cors  =require('cors');

const app =  express();
app.use(cors()).use(express.json())
app.use('/public',  express.static(__dirname+'/public'))


let asignacion = [];


app.get('/asignacion', async (req, res) => {
    res.status(200).send(asignacion);
  
});



app.post('/asignacion', async (req, res) => {
  
    const {body} = req;

    asignacion.push(body)

    res
        .status(201)
        .send({ message:'Se guarda la asignacion en series de tv', body});
  

});


module.exports ={app, asignacion}















