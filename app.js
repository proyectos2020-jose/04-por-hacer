const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch(comando) {
    case 'crear':
        let tarea = porHacer.crearTarea(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let tareas = porHacer.listar();
        for( let tarea of tareas ) {        
            console.log('========TAREAS POR HACER========'.green);
            console.log(tarea.descripcion);
            console.log(`El estado de la tarea es: ${tarea.completado}` )
            console.log('========================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrarTarea(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('comando no reconocido') 
}
