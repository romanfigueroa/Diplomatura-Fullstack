import mongoose from 'mongoose';

// Definición del esquema para los superhéroes
const superheroSchema = new mongoose.Schema({
  nombreSuperHeroe: { type: String, required: true },
  nombreReal: { type: String, required: true },
  edad: { type: Number, min: 0 },
  planetaOrigen: { type: String, default: 'Desconocido' },
  debilidad: { type: String },
  poderes: [String],
  aliados: [String],
  enemigos: [String],
  createdAt: { type: Date, default: Date.now }
});

// Exportar el modelo basado en el esquema
export default mongoose.model('SuperHero', superheroSchema);
