const express = require('express');

var app = express();

app.use(express.static(__dirname + '/app'))

app.get('/', (req, res) => {
    res.redirect('/index.html')
})

app.get('/api/consultar-usuario', (req, res) => {

    let usuario = [{
            idUsuario: 1,
            nombre: "Kevin"
        },
        {
            idUsuario: 2,
            nombre: 'Esperanza'
        }
    ]

    res.status(200).json(usuario)

})
var port = process.env.PORT || 3000;
app.listen(port);