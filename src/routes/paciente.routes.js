// rutas de los usuarios

const router = require('express').Router()

const pacienteController = require('../controllers/paciente.controller')
const validate = require('../middlewares/validate')
const medicoScheme = require('../middlewares/schemes/medico.scheme')


router.get('/', pacienteController.getPacientes)
router.get('/:idPaciente', pacienteController.getPaciente)
router.post('/crearPaciente',validate(medicoScheme.crearMedico), pacienteController.crearPaciente)

module.exports = router