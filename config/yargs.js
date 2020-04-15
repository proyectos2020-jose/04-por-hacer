const descripcion = {
    demand: true,
    alias: 'd'
}

const completado = {
    default: true,
    alias: 'c'
}
const argv = require('yargs').command('listar', 'Lista las tareas por hacer', {
}).command('actualizar', 'Actualiza el estado de una tarea a completada', {
    descripcion,
    completado
}
).command('crear', 'Crear una tarea nueva por hacer', {
    descripcion
}).command('borrar', 'Borrar de bd una tarea', {
    descripcion
})
.help().argv;

module.exports = {argv};
