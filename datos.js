const opciones = {

    nombre: {
        alias: 'n',
        demand: true
    },
    matematicas: {
        alias: 'm',
        demand: true
    },
    ingles: {
        alias: 'i',
        demand: true
    },
    programacion: {
        alias: 'p',
        demand: true
    }
}

let obtenerPromedio = {nota_uno, nota_dos, nota_tres}

const argv = require('yargs')
            .command('promedio', 'Calcular el promedio')
            .argv

module.exports = {
    obtenerPromedio,
    argv
};
