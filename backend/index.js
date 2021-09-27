const express = require('express')

const obterDados = require('./functions/obterDados')
const salvarDado = require('./functions/salvarDado')
const editarDado = require('./functions/editarDado')
const deletarDado = require('./functions/deletarDado')

const app = express()

app.use(express.json())

app.get('/cars',obterDados)
app.post('/cars',salvarDado)
app.put('/cars/:id',editarDado)
app.delete('/cars/:id',deletarDado)

app.listen('3001')