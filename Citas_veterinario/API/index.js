const express = require('express');
const mongoose = require('mongoose');
// llamamos a la carpeta routes 
const routes = require('./routes');
// Llamamos al body parse 
const bodyParser = require('body-parser');
// importamos cors
const cors = require('cors');


// crear el servidor 
const servidor = express();

/**  Habilitamos el cors en la API pero para que solo cierto dominios 
 puedan ingresar y consumirla*/
const whitelist =  ['http://localhost:3000']
const corsOptions = {
    origin: (origin, callback) => {
        const existe = whitelist.some( dominio => dominio === origin);
        if (existe) {
            callback (null, true)
        } else {
            callback(new Error('No permitido por CORS'))
        }
    }
}
/** Ahora si habilitamos el acceso */
// servidor.use(cors(corsOptions));
servidor.use(cors());

// conectar a mongodb 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    UseUnifiedTopology: true
    
}, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
});

// Habilitamos el body parser
servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({extended: true}));

// habilitando el routing 
servidor.use('/', routes())

// puerto y arrancar el servidor 
servidor.listen(4000, () =>{
    console.log("Servidor corriendo...");
});
