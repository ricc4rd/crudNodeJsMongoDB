const express = require('express')
const router = express.Router()

const alumnoController = require ( '../controllers/alumnoController')

// mostramos los alumnos con get 
router.get('/', alumnoController.mostrar)
// cremos los alumnos con POST
router.post('/crear', alumnoController.crear)
//Editar alumnos (POST)
router.post('/editar', alumnoController.editar)
//Borrar alumnos (GET)
router.get('/borrar/:id', alumnoController.borrar)
module.exports = router