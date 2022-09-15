// rutas de los usuarios

const router = require('express').Router()

const pacienteController = require('../controllers/paciente.controller')

router.get('/', pacienteController.pacientes)
router.get('/:idPaciente', pacienteController.paciente)
router.post('/crearPaciente/', pacienteController.crear)

module.exports = router