import { EventEmitter } from 'events';

//Crear una instancia de EventEmitter
const emisor = new EventEmitter;

//Definir un evento personalizado
emisor.on('Saludo', (nombre)=>{
    console.log(`!Hola ${nombre}!`);
})

//Emitir el evento 'saludo'
emisor.emit('Saludo', 'Mundo');