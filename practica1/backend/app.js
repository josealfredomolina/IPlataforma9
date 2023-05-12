require('dotenv').config();
const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();


const SerieSchema = require('./models/Serie');


app.use(express.json());
app.use(cors());

const Conexion = async()=> { 
    try {
        await mongoose.connect(process.env.MONGOURI);
        console.log('CONNECTED TO MONGODB!!');
       
    } catch (error) {
        console.log(error)
        throw new Error('FAILED TO CONNECT TO MONGODB')
    }   
  }

Conexion();


app.get('/series', async (req, res) => {
    console.log('TRYING TO FETCH series');
    try {
      const Serie = await SerieSchema.find();
      res.status(200).json({
        series: Serie.map((Serie) => ({
          id: Serie.id,
          nombre: Serie.nombre,
          clasificacion: Serie.clasificacion
        })),
      });
      console.log('FETCHED series');
    } catch (err) {
      console.error('ERROR FETCHING series');
      console.error(err.message);
      res.status(500).json({ message: 'Failed to load series.' });
    }
});


app.post('/serie', async (req, res) => {
    console.log('TRYING TO STORE activo');
    const nombre = req.body.nombre;
    const clasificacion = req.body.clasificacion;
  
    if (!nombre || nombre.trim().length === 0) {
      console.log('INVALID INPUT - NO nombre');
      return res.status(422).json({ message: 'Invalid activo nombre.' });
    }
    
    if (!clasificacion || clasificacion.trim().length === 0) {
      console.log('INVALID INPUT - NO clasificacion');
      return res.status(422).json({ message: 'Invalid activo clasificacion.' });
    }
  
    const serie = new SerieSchema({
      nombre: nombre,
      clasificacion:clasificacion
    });
  
    try {
      await serie.save();
      res
        .status(201)
        .json({ message: 'serie saved', serie});
      console.log('STORED NEW serie');
    } catch (err) {
      console.error('ERROR FETCHING serie');
      console.error(err.message);
      res.status(500).json({ message: 'Failed to save serie.' });
    }
  });

app.put('/serie/:id', async (req, res) => {
    console.log('TRYING TO UPDATE ACTIVO');
    try {
     const {id} = req.params;
     const {...data } =  req.body;
     console.log(id,data)
     await SerieSchema.findByIdAndUpdate(id,data )
    console.log('UPDATE serie');
    res.status(200).json({ message: 'Actualiza serie' });
    } catch (err) {
      console.error('ERROR FETCHING Activo');
      console.error(err.message);
      res.status(500).json({ message: 'Failed to update serie.' });
    }
});


app.delete('/serie/:id', async (req, res) => {
    console.log('TRYING TO DELETE Activo');
    try {
         await SerieSchema.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: 'Deleted serie!' });
      console.log('DELETED serie');
    } catch (err) {
      console.error('ERROR FETCHING serie');
      console.error(err.message);
      res.status(500).json({ message: 'Failed to delete serie.' });
    }
  });


app.listen(process.env.PORT, ()=> { console.log('SERVIDOR INICIADO')});


