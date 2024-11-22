// Importación del módulo Mongoose para interactuar con MongoDB
import mongoose from "mongoose";

// Definición del esquema de Mongoose para la colección de superhéroes
const superheroSchema = new mongoose.Schema({
  // Identificador único del superhéroe (puede no ser necesario si MongoDB ya genera un _id automáticamente)
  id: String,

  // Nombre del superhéroe (campo requerido, tipo String)
  nombreSuperheroe: { type: String, required: true },

  // Nombre real del superhéroe (campo requerido, tipo String)
  nombreReal: { type: String, required: true },

  // Edad del superhéroe (valor mínimo de 0 para evitar edades negativas)
  edad: { type: Number, min: 0 },

  // Planeta de origen (si no se especifica, toma el valor por defecto 'Desconocido')
  planetaOrigen: { type: String, default: 'Desconocido' },

  // Debilidad del superhéroe (opcional, tipo String)
  debilidad: String,

  // Lista de poderes que posee el superhéroe (opcional, tipo arreglo de Strings)
  poderes: [String],

  // Lista de aliados del superhéroe (opcional, tipo arreglo de Strings)
  aliados: [String],

  // Lista de enemigos del superhéroe (opcional, tipo arreglo de Strings)
  enemigos: [String],

  // Nombre del creador del superhéroe (opcional, tipo String)
  creador: String,

  // Fecha de creación del registro (se establece automáticamente al momento de la inserción)
  createdAt: { type: Date, default: Date.now }
}, 
{
  // Nombre explícito de la colección en la base de datos (evita que Mongoose pluralice automáticamente el nombre)
  collection: 'Grupo-20' 
});

// Creación y exportación del modelo basado en el esquema definido
export default mongoose.model('SuperHeroe', superheroSchema);
