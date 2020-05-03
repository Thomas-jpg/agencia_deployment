//import express
const express= require('express');
const path=require('path');
//sirve para poder procesar datos que vengan de la url 
const bodyParser= require('body-parser');
const routes=require('./routes');
const configs= require('./config');

require('dotenv').config({path: 'variables.env'});


/* estas lineas de codigo es para verificar que la coneccion a la bd si esta bien
const db= require('./config/database');

db.authenticate()
    .then(()=>{
        return console.log('db conectada');
    })
    .catch(error => console.log(error));
    */
//configurar express
const app=express();
//habilitar pug
app.set('view engine', 'pug');

//añadir las vistas
app.set('views', path.join(__dirname, './views'));

//cargar una carpeta estatica llamada public
app.use(express.static('public'));

//validar si el proyecto esta en desarrollo o en produccion
const config= configs[app.get('env')];//env es una variable de node que detecta el ambiente en el que estamos 

//creamos la variable para el sitio web
app.locals.titulo=config.nombresitio;

//Muestra el año actual. y locals permite a node ocupar estas variables dentro de todo el proyecto
app.use((req,res,next)=>{
    //crear una nueva fecha. como vemos nodeJS permite usar js sin problemas 
    const fecha=new Date();
    res.locals.fechaActual= fecha.getFullYear();
    //retornar la pagina actual
    res.locals.ruta=req.path;
    console.log(res.locals);

    return next(); //permite que siga ejecutando las demas lineas
});

//EJECUTAMOS EL BODY-PARSER el cual nos permitira interpretar los datos de la url 
app.use(bodyParser.urlencoded({extended:true}));

//cargar las rutas. ocupamos use ya que va a recibir los diferentes tipos de peticiones.
app.use('/',routes());

//Puerto y host para la app
const host=process.env.HOST || '0.0.0.0';
const port=process.env.PORT || 3000;

app.listen(port,host,()=>{
    console.log('el servidor esta funcionando');
});