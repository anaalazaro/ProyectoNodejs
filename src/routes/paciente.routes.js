// rutas de los usuarios

const router = require('express').Router()

const pacienteController = require('../controllers/paciente.controller')
const validate = require('../middlewares/validate')
const medicoScheme = require('../middlewares/schemes/medico.scheme')

var multer = require('multer')
const globalConstants = require('../const/globalConstants')
var upload = multer({

    dest:'uploads/archivos-pacientes/',
    limits:{fileSize: globalConstants.MAX_FILE_SIZE}
})



router.post('/subirArchivo', upload.single('jpg'), pacienteController.subirArchivo) // RUTA PARA SUBIR UN ARCHIVO
router.post('/descargarArchivo/', pacienteController.descargarArchivo) // RUTA PARA OBTENER UN ARCHIVO

router.get('/', pacienteController.getPacientes)
router.get('/:idPaciente', pacienteController.getPaciente)
router.post('/crearPaciente',validate(medicoScheme.crearMedico), pacienteController.crearPaciente)

module.exports = router