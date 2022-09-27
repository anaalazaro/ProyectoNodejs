// rutas de los medicos

const router = require('express').Router()

const medicoController = require('../controllers/medico.controller')
const validate = require('../middlewares/validate')
const pacienteScheme = require('../middlewares/schemes/paciente.scheme')

router.get('/', medicoController.getMedicos)
router.get('/:idMedico', medicoController.getMedico)
router.post('/crearMedico',validate(pacienteScheme.crearPaciente), medicoController.crearMedico)

module.exports = router