const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
//Contenido Statico

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Eduardo Ttito',
        titulo: 'Ptmr un Hueco'
    });
});

app.get('/generic',(req, res)=> {
    res.render('generic', {
        nombre: 'Eduardo Ttito',
        titulo: 'Ptmr un Hueco'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Eduardo Ttito',
        titulo: 'Ptmr un Hueco'
    });
});

app.get('*',(req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})