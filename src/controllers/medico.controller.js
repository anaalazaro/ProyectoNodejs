const models = require('../database/models/index')
const errors = require('../const/error')

module.exports = {

    getMedicos:async( req , res)  => {
        try {
            const medicos = await models.medico.findAll()

            res.json({
                success: true,
                data: {
                    medicos: medicos
                }
            })

        } catch (err) {
            return next(err)
        }
    },
     
    getMedico:async( req , res,next)  => {
        try {
            const medico = await models.medico.findOne({
                where: {
                    id: req.params.idMedico
                }
            })     

            if(!medico) return next(errors.MedicoInexistente)       

            res.json({
                success: true,
                data: {
                    medico: medico
                }
            })

        } catch (err) {
            return next(err)
        }
    }, 
    crearMedico:async( req , res)  => {
        try {
            const medico = await models.medico.create(req.body)

            res.json({
                success: true,
                data: {
                    id: medico.id
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