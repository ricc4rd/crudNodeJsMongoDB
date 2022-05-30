const mongoose = require('mongoose')
const url = 'mongodb://localhost/db_lab2'

mongoose.connect (url, {
    UseNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error al conectar con la base de datos'))
db.once('open', function callback(){
    console.log("¡Conectado exitosamente!")
})

module.exports = db