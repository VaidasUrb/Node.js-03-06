import express from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

// app.get('/', function (req, res) {
//     res.send('<h1>Titulinis</h1>')
// })

app.get('/pagrindinis', function (req, res) {
    res.sendFile(__dirname + '/templates/index.html')
})

app.get('/titulinis', function (req, res) {
    res.sendFile(__dirname + '/templates/titulinis.html')//grazina turini i narsykle
})

app.get('/istorija', function (req, res) {
    res.sendFile(__dirname + '/templates/istorija.html')//grazina turini i narsykle
})

app.get('/karjera', function (req, res) {
    res.sendFile(__dirname + '/templates/karjera.html')//grazina turini i narsykle
})

app.get('/kontaktai', function (req, res) {
    res.sendFile(__dirname + '/templates/kontaktai.html')//grazina turini i narsykle
})

app.get('/rekvizitai', function (req, res) {
    res.sendFile(__dirname + '/templates/rekvizitai.html')//grazina turini i narsykle
})



app.listen(3000)