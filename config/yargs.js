const argv = require('yargs').command('listar', 'Lista las tareas por hacer', {
    descripcion: {
        alias: 'd',
        demand: true
    }
}).command('actualizar', 'Actualiza el estado de una tarea a completada', {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completada: {
        default: true,
        alias: 'c'
    }
}
).help().argv;

module.exports = {argv};