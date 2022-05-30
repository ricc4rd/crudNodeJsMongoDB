// creacion del servidor local con express
const express = require('express')
const app = express()

const db = require('./db')

app.set('view engine', 'ejs')
app.set(express.urlencoded({extended:true}))
app.use(express.json())

app.use (express.static('public'))

const alumnos = require('./routes/alumnos')
app.use(alumnos)

app.get('/', (req, res)=>{
    res.send('Hello friend')
})

app.listen(3000, ()=>{
    console.log('¡Server Up! en http://localhost:3000')
})