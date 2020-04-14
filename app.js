const argv = require('./config/yargs').argv;
console.log(argv)
let comando = argv._[0];

switch(comando) {
    case 'crear':
        console.log('crear');
        break;
    case 'listar':
        console.log('listar');
        break;
    case 'actualizar':
        console.log('actualizar');
        break;
     default:
        console.log('comando no reconocido') 
}