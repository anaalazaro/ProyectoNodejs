module.exports = {

    medicos:async( req , res)  => {
        try{
            console.log('ejecutando medicos')

            res.json({
                message: "Listado de medicos"
            })
        }catch(e){
            console.log(e)
        }
    },
     
    medico:async( req , res)  => {
        try{
            console.log('ejecutando medicos')

            res.json({
                message: "Información del medico 1 "
            })
        }catch(e){
            console.log(e)
        }
    }, 
    crear:async( req , res)  => {
        try{
            console.log('ejecutando crear')

            res.json({
                message: "Creacion medico "
            })
        }catch(e){
            console.log(e)
        }
    }, 

    prueba:async( req , res)  => {
        try{
            console.log('ejecutando')

            res.json({
                message: "holis"
            })
        }catch(e){
            console.log(e)
        }
    },
}