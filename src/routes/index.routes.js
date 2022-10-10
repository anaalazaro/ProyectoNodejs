// se encarga de comectar todas las rutas
const { Router }  = require('express')

const usuarioRoutes = require('./paciente.routes')
const medicoRoutes = require('./medico.routes')
const authRoutes = require('./auth.routes')
const decodeJWT = require("../middlewares/decodeJWT")

const rutas_init = () => {
    const router = Router()
    router.use('/pacientes',decodeJWT,usuarioRoutes)
    router.use('/medicos',decodeJWT,medicoRoutes)

    return router
}

const rutas_auth = () => {
    const router = Router()
  
    router.use("/auth", authRoutes)
  
    return router
  }
  
module.exports = { rutas_init , rutas_auth } 
