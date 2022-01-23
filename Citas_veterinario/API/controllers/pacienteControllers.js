const Paciente = require('../models/Paciente');


// Funcion para cuando creamos un nuevo cliente 

exports.nuevoCliente = async (request, response, next) => {
    // Creamos objeto de paciente con datos de re.body 
    const paciente = new Paciente(request.body);
    
    // Todo: Insertar en la base de datos
    try {
        await paciente.save();
        // mensaje de que los datos fueron guardados exitosamente
        response.json({ mensaje : 'El cliente se agrego correctamente'});
    } catch (error) {
        console.log(error);
        next();
    }

}

/** Obtiene todos los pacientes */

exports.obtenerPacientes =  async (request, response, next) => {
    try {
        const pacientes = await Paciente.find({});
        response.json(pacientes);
    } catch (error) {
        console.log(error);
        next();
    }
}

/** Obteniendo un solo paciente */

exports.obtenerPaciente = async (request, response, next) => {
    try {
        const paciente = await Paciente.findById(request.params.id);
        response.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}

/** Actualiza un registro por su ID */

exports.actualizarPaciente = async (request, response, next) => {
    try {
        const paciente = await Paciente.findByIdAndUpdate({_id: request.params.id}, request.body, {
            new: true
        });
        response.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}

/** Eliminando un registro por su ID */

exports.eliminarPaciente = async (request, response, next) => {
    try {
        await Paciente.findOneAndDelete({_id: request.params.id});
        response.json('El paciente ha sido eliminado')
    } catch (error) {
        console.log(error);
        next();
    }
}