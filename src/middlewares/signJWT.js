const jwt = require('jsonwebtoken') // para crear el token
const globalConstants = require('../const/globalConstants')

module.exports = function (paciente) { 

    if (paciente) {

        // Se crea el token con los datos 
        const token = jwt.sign({
            id: paciente.id
        },
            globalConstants.JWT_SECRET, // clave secreta para encriptar el token
            {
                expiresIn: '3000m' // expira en 3 horas
            }
        )
        return token // devuelvo el token
    } else {
        return null //devuelvo null
    }


}