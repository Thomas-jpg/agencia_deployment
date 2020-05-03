const Viajes= require('../models/Viajes');
const Testimonial= require('../models/Testimoniales');

exports.consultasHomePage= async (req,res)=>{
    /*Estas lineas se ocupan cuando no hagamos uso de async-await 
    ya que esta es otra forma de poder hacer consultas multiples
    con el uso de promises

    const promises =[];

    promises.push(Viajes.findAll({
        limit:3
    }));
    promises.push(Testimonial.findAll({
        limit:3
    }))
    //pasamos el promise y lo ejecutamos 
    const resultado= Promise.all(promises);

    resultado.then(resultado =>{
            res.render('index',{
                pagina:'Inicio',
                clase:'home',
                viajes: resultado[0],
                testimoniales: resultado[1]
            })
        })
        .catch(error => console.log(error));*/
    //CONSULTAS MULTIPLES CON USO DE ASYNC AWAIT
    const viajes=await Viajes.findAll({
        limit:3
    });
    const testimoniales=await Testimonial.findAll({
        limit:3
    });

    res.render('index',{
        pagina:'Inicio',
        clase:'home',
        viajes: viajes,
        testimoniales: testimoniales
    });

}