const models = require('../database/models/index')
const errors = require('../const/error')

module.exports = {

    getPacientes:async( req , res)  => {
        try {
            const pacientes = await models.paciente.findAll()

            res.json({
                success: true,
                data: {
                    pacientes: pacientes
                }
            })

        } catch (err) {
            return next(err)
        }
    },
     
    getPaciente:async( req , res,next)  => {
        try {
            const paciente = await models.paciente.findOne({
                where: {
                    id: req.params.idPaciente
                },
                include:[{
                    model:models.medico
                }]
            }) 
            
            if(!paciente) return next(errors.PacienteInexistente)

            res.json({
                success: true,
                data: {
                    paciente: paciente
                }
            })

        } catch (err) {
            return next(err)
        }
    }, 

    crearPaciente:async( req , res,next)  => {
        try {
            const paciente = await models.paciente.create(req.body)

            res.json({
                success: true,
                data: {
                    id: paciente.id
                }
            })

        } catch (err) {
            return next(err)
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