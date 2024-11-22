import mongoose from "mongoose";

// Función para conectar a la base de datos MongoDB
export async function connectDB() {
  try {
    // Se intenta conectar a la base de datos utilizando la URI almacenada en las variables de entorno
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conexión exitosa a MongoDB');
  } catch (error) {
    // Captura errores durante la conexión y los imprime en la consola
    console.log('Error al conectar a MongoDB:', error);
    // Finaliza el proceso con un código de error (1) para indicar una falla crítica
    process.exit(1);
  }
}
