const express= require('express');
const router= express.Router();

/*control del modelo de la bd (pasados a la capa de controladores)
const Viajes= require('../models/Viajes');
const Testimonial= require('../models/Testimoniales');
*/
//controladores
const nosotrosController= require('../controllers/nosotrosController');

const homeController= require('../controllers/homeController');

const viajesController=require('../controllers/viajesController');

const testimonialesController= require('../controllers/testimonialesController');

//con esto tenemos mayor contro de todas las rutas que vayamos creando a lo largo del proyecto
module.exports=function(){
    /*Cuando se tienen multiples consultas, es necesario crear un arreglo de promises
    ,de lo contrario no funcionara 
    */
    router.get('/',homeController.consultasHomePage);

    //podemos pasar variables desde las routas que solo estaran disponibles en esas routas o vistas
    router.get('/nosotros',nosotrosController.infoNosotros);

    router.get('/viajes',viajesController.mostrarViajes);

    router.get('/viajes/:id',viajesController.mostrarViaje);

    router.get('/testimoniales',testimonialesController.mostrarTestimoniales);
    //cuando se llena el formulario y los datos se mandan por post
    router.post('/testimoniales',testimonialesController.agregarTestimonial);

    return router;
}