const Viajes= require('../models/Viajes');
//utilizando async-await Siempre es recomendable cuando haya una interaccion con la base de datos
exports.mostrarViajes=async (req,res)=>{
    const viajes=await Viajes.findAll()
    res.render('viajes',{
        pagina:'Proximos Viajes',
        viajes: viajes
    });
}

exports.mostrarViaje=async (req,res)=>{
    const viaje=await Viajes.findByPk(req.params.id)
    res.render('viaje',{
        viaje: viaje
    });
}