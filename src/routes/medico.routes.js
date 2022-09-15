// rutas de los medicos

const router = require('express').Router()

const medicoController = require('../controllers/medico.controller')

router.get('/', medicoController.medicos)
router.get('/:idMedico', medicoController.medico)
router.post('/crearMedico', medicoController.crear)

module.exports = router