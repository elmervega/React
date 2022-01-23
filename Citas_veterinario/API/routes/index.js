const express = require('express');
const router = express.Router();
// Llamamos la funcion que creamos en controllers 
const pacienteController = require('../controllers/pacienteControllers');

// Como vamos exportar estos al index principal usamos:
module.exports = function() {

    // agregar nuevos pacientes via POST
    router.post('/pacientes',
        pacienteController.nuevoCliente
    )

    // Obteniendo todos los registros del paciente 
    router.get('/pacientes',
        pacienteController.obtenerPacientes
    );

    // Se obtiene un paciente en especifico 
    router.get('/pacientes/:id',
        pacienteController.obtenerPaciente
    );

    // Actualizar un registro con un ID especifico
    router.put('/pacientes/:id',
        pacienteController.actualizarPaciente
    );

    // Eliinar un registro por su ID
    router.delete('/pacientes/:id',
        pacienteController.eliminarPaciente
    )

    return router;
}