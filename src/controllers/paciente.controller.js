const models = require('../database/models/index')
const errors = require('../const/error')

module.exports = {

    getPacientes:async( req , res, next)  => {
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

    subirArchivo: async (req, res, next) => {
        try {

            //verifico si existe el paciente
            const paciente = await models.paciente.findOne({
                where: {
                    id: req.body.pacienteId
                }
            })
            if (!paciente) return next(errors.PacienteInexistente)


            // busco el archivo del paciente
            const ar = await models.archivo_paciente.findOne({
                where: {
                    pacienteId: req.body.pacienteId,
                    nombre: req.body.nombre
                }
            })
            if (!ar) { // si el archivo no existe, lo creo

                const archivo = await models.archivo_paciente.create({
                    nombre: req.body.nombre, //nombre para identificar el archivo por si un usuario tiene varios archivos
                    file: req.file ? req.file.filename : null, //en el campo file se guarda el nombre del archivo
                    original_name: req.file ? req.file.originalname : null, //en el campo original_name se guarda el nombre original del archivo
                    pacienteId: req.body.pacienteId
                })

            }


            res.json({
                success: true,
                data: {
                    message: "archivo cargado"
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    descargarArchivo: async (req, res, next) => {
        try {

            // verifico si existe el paciente
            const paciente = await models.paciente.findOne({
                where: {
                    id: req.body.pacienteId
                }
            })
            if (!paciente) return next(errors.PacienteInexistente)

            // verifico si existe el archivo
            const archivo = await models.archivo_paciente.findOne({
                where: {
                    pacienteId: req.body.pacienteId,
                    nombre: req.body.nombre
                }
            })
            if (!archivo) return next(errors.ArchivoInexistente)


            res.download('uploads/archivos-pacientes/' + archivo.file, archivo.original_name) //descarga el archivo

        } catch (err) {
            return next(err)
        }
    }

}