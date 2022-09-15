
module.exports = {

    pacientes:async( req , res)  => {
        try{
            console.log('ejecutando /pacientes')

            res.json({
                message: "Listado de pacientes"
            })
        }catch(e){
            console.log(e)
        }
    },
     
    paciente:async( req , res)  => {
        try{
            console.log('ejecutando /paciente')

            res.json({
                message: "Información del paciente 1 "
            })
        }catch(e){
            console.log(e)
        }
    }, 

    crear:async( req , res)  => {
        try{
            console.log('ejecutando crear')

            res.json({
                message: "Creacion paciente "
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