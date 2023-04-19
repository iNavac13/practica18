const express=require('express'); //dependencia express
const mongoose=require('mongoose'); //dependencia mongoose
require("dotenv").config();

const app=express();
const port=process.env.PORT || 9000;    //usamos el puerto establecido, si no usamos el puerto 9000
app.listen(9000,()=>console.log('server listening on port', port)); //mensaje para mi consola para saber que esta funcionado correctamente al correr el documento

//ruta principal de mi servidor
app.get("/", (req,res)=>{
    res.send('Mi servidor')
})

//coneccion con mongoDB
mongoose
.connect(process.env.MONGODB) 
.then(()=>console.log('connected to MongoDB Atlas'))//mensaje a la consola para verificar la conexion
.catch((error)=>console.log(error))//en caso de error

