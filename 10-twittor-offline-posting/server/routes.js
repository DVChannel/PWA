// Routes.js - Módulo de rutas
var express = require('express');
var router = express.Router();



const mensajes=[
  {
    _id: 'XXX',
    user: 'spiderman',
    mensaje: 'holamor'
  }
];



// Get mensajes
router.get('/', function (req, res) {
 // res.json('Obteniendo mensajes');
res.json(mensajes);
});

router.post('/', function(req, res){
const mensaje = {
  mensaje: req.body.mensaje,
  user: req.body.user
};
mensajes.push(mensaje);
res.json({
  ok: true,
  mensaje
});  
});


module.exports = router;