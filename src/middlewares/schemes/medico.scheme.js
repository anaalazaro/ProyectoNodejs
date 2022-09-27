// ARCHIVO PARA ESCRIBIR SCHEMES DE MEDICOS

const Joi = require('joi') // importar Joi para validar los datos de entrada

let crearMedico = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().email().optional(),
    especialidad: Joi.string().optional(),
    tiempo_trabajando:Joi.number().optional()
})

module.exports = {
    crearMedico
}