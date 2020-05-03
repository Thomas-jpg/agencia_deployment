const Testimonial= require('../models/Testimoniales');

exports.mostrarTestimoniales =async (req,res)=>{
    //hacemos un select * a la tabla de testimoniales
    const testimoniales= await Testimonial.findAll()
    res.render('testimoniales',{
        pagina: 'Testimoniales',
        testimoniales: testimoniales
    });
    
}

exports.agregarTestimonial=async (req,res)=>{  
    console.log(req.body);
    //validar que todos los campos esten llenos 
    let {nombre,correo,mensaje}=req.body;

    let errores=[];
    if (!nombre) {
        errores.push({'mensaje':'Agrega tu Nombre'});
    }
    if (!correo) {
        errores.push({'mensaje':'Agrega tu Correo'});
    }
    if (!mensaje) {
        errores.push({'mensaje':'Agrega tu Mensaje'});
    }
    //revisar si hay errores
    if (errores.length > 0) {
        //muestra la vista con errores
        const testimoniales= await Testimonial.findAll()
        res.render('testimoniales',{
            errores,
            nombre,
            correo,
            mensaje,
            pagina:'Testimoniales',
            testimoniales
        })
    }else{
        //agregar a la bd
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        .then(testimonial =>{
            res.redirect('/testimoniales')
        })
        .catch(error => console.log(error));
    }
}