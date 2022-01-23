const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defiicion de una tabla
const pacienteSchema = new Schema({
    // Colocamos el tipo de campo que sera, trim elimina los espacios
    nombre: {
        type: String,
        trim: true,
    }, 
    propietario: {
        type: String,
        trim: true
    }, 
    telefono: {
        type: String,
        trim: true
    },
    fecha: {
        type: String,
        trim: true
    },
    hora: {
        type: String,
        trim: true
    }, 
    sintomas: {
        type: String,
        trim: true
    }
});

// creamos el module para exportar y crear registros
module.exports = mongoose.model('Paciente', pacienteSchema);