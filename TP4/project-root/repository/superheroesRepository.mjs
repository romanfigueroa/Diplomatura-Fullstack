// repository/superheroesRepository.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; // Esto estaba mal importado
import SuperheroesDataSource from './superheroesDataSource.mjs';

// Resolver __filename y __dirname para ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class SuperheroesFileRepository extends SuperheroesDataSource {
  constructor() {
    super(); // Llamar al constructor de la clase base
    this.filePath = path.join(__dirname, '../superheroes.txt'); // Ruta al archivo de datos
  }

  // Implementación del método obtenerTodos() desde SuperheroesDataSource
  obtenerTodos() {
    try {
      const data = fs.readFileSync(this.filePath, 'utf-8'); // Leer el archivo
      return JSON.parse(data); // Convertir el archivo JSON en un array de objetos JS
    } catch (error) {
      console.error('Error al leer el archivo:', error);
      return [];
    }
  }
}
