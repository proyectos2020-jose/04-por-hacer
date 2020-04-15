const fs = require('fs');


let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json',data,(err) => {        
        if(err) throw new Error('Error durante el guardado de datos', err); 
    });
};

const cargarDB = () => {
    try{
        listadoPorHacer = require('../db/data.json');
    } catch {
        listadoPorHacer = [];
    }
}

const listar = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if(index >= 0) {
        listadoPorHacer[index].completado = completado;
console.log(listadoPorHacer[index])
        guardarDB();
        return true;
    } else {
        return false
    }
}

const crearTarea = (descripcion) => {
    cargarDB();
    
    let tarea = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(tarea)

    guardarDB();

    return tarea;
}

const borrarTarea = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)
    if(nuevoListado.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {crearTarea, listar, actualizar, borrarTarea}
