// se encarga de comectar todas las rutas
const { Router }  = require('express')

const usuarioRoutes = require('./paciente.routes')
const medicoRoutes = require('./medico.routes')

const rutas_init = () => {
    const router = Router()
    router.use('/pacientes',usuarioRoutes)
    router.use('/medicos',medicoRoutes)

    return router
}

module.exports = { rutas_init }