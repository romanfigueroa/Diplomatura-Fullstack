import SuperHero from 'src/models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository {
  async obtenerPorId(id) {
    return await SuperHero.findById(id);
  }

  async obtenerTodos() {
    return await SuperHero.find({});
  }

  async buscarPorAtributo(atributo, valor) {
    const query = { [atributo]: new RegExp(valor, 'i') }; // 'i' para ignorar mayúsculas/minúsculas
    return await SuperHero.find(query);
  }

  async obtenerMayoresDe30() {
    return await SuperHero.find({
      edad: { $gt: 30 },              // Edad mayor que 30
      planetaOrigen: 'Tierra',        // Solo de la Tierra
      poderes: { $size: { $gte: 2 } } // Al menos 2 poderes
    });
  }
}

export default new SuperHeroRepository();
