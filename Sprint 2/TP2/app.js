// Importa la biblioteca Mongoose para facilitar la interacción con MongoDB
const mongoose = require('mongoose');

// Conecta a MongoDB usando una URL de conexión para una base de datos alojada en MongoDB Atlas
// No especificamos opciones adicionales como `useNewUrlParser` o `useUnifiedTopology` ya que son
// obsoletas en Mongoose 6 y superiores
mongoose.connect('mongodb+srv://Grupo-20:grupo20@cursadanodejs.ls9ii.mongodb.net/Node-js?retryWrites=true&w=majority')
    .then(() => console.log('Conexión exitosa a MongoDB')) // Mensaje en caso de éxito
    .catch(error => console.error('Error al conectar a MongoDB:', error)); // Captura e informa de errores de conexión

// Define un esquema (schema) para los documentos de la colección "Grupo-20"
// Esto establece la estructura y reglas para cada documento dentro de esta colección
const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: { type: String, required: true }, // Nombre del superhéroe, campo obligatorio
    nombreReal: { type: String, required: true },       // Nombre real del superhéroe, campo obligatorio
    edad: { type: Number, min: 0 },                     // Edad del superhéroe, valor mínimo de 0
    planetaOrigen: { type: String, default: 'Desconocido' }, // Planeta de origen con valor por defecto
    debilidad: String,                                  // Debilidad del superhéroe, campo opcional
    poderes: [String],                                  // Array de poderes del superhéroe, tipo String
    aliados: [String],                                  // Array de aliados, tipo String
    enemigos: [String],                                 // Array de enemigos, tipo String
    createdAt: { type: Date, default: Date.now }        // Fecha de creación, por defecto es la fecha actual
}, { collection: 'Grupo-20' }); // Establece la colección de MongoDB en la que se almacenarán los documentos

// Crea un modelo llamado `SuperHero` basado en el esquema definido
// Este modelo permite realizar operaciones CRUD en la colección
const SuperHero = mongoose.model('SuperHero', superheroSchema);

// Función asíncrona principal para ejecutar operaciones CRUD secuenciales
async function main() {
    try {
        // Inserta un nuevo superhéroe en la colección utilizando el modelo `SuperHero`
        const hero = new SuperHero({
            nombreSuperHeroe: 'Spiderman',       // Nombre del superhéroe
            nombreReal: 'Peter Parker',          // Nombre real
            edad: 25,                            // Edad
            planetaOrigen: 'Tierra',             // Planeta de origen
            debilidad: 'Radioactiva',            // Debilidad
            poderes: ['Trepar paredes', 'Sentido aracnido', 'Super fuerza', 'Agilidad'], // Poderes
            aliados: ['Ironman'],                // Aliados
            enemigos: ['Duende Verde']           // Enemigos
        });
        await hero.save(); // Guarda el nuevo documento en la base de datos
        console.log('Superhéroe insertado:', JSON.stringify(hero, null, 2)); // Imprime el héroe insertado con formato JSON

        // Actualiza el documento donde el nombre del superhéroe sea 'Spiderman'
        const updateResult = await SuperHero.updateOne(
            { nombreSuperHeroe: 'Spiderman' },   // Condición de búsqueda
            { $set: { edad: 26 } }               // Actualización: cambia la edad a 26
        );
        console.log('Resultado de la actualización:', JSON.stringify(updateResult, null, 2)); // Imprime resultado de la actualización

        // Elimina el documento donde el nombre del superhéroe sea 'Spiderman'
        const deleteResult = await SuperHero.deleteOne({ nombreSuperHeroe: 'Spiderman' }); // Condición de eliminación
        console.log('Superhéroe eliminado:', JSON.stringify(deleteResult, null, 2)); // Imprime resultado de la eliminación

        // Encuentra todos los superhéroes cuyo `planetaOrigen` es 'Tierra'
        const heroes = await SuperHero.find({ planetaOrigen: 'Tierra' }); // Condición de búsqueda
        console.log('Superhéroes encontrados:', JSON.stringify(heroes, null, 2)); // Imprime los héroes encontrados en formato JSON
    } catch (error) {
        // Captura e informa de cualquier error que ocurra durante las operaciones CRUD
        console.error('Error en las operaciones CRUD:', error);
    }
}

// Llama a la función principal y cierra la conexión a MongoDB al finalizar todas las operaciones
main().then(() => mongoose.disconnect());
