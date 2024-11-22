import SuperHero from "../models/SuperHero.mjs";
import IRepository from "./IRepository.mjs";

class SuperHeroRepository extends IRepository {

  async crear(superheroe) {
    return await SuperHero.create(superheroe);
  }

  async actualizar(id, superheroe) {
    return await SuperHero.findByIdAndUpdate(id, superheroe);
  }

  async deleteById(id) {
    return await SuperHero.findByIdAndDelete(id);
  }

  async deleteByName(nombre) {
    console.log(nombre)
    return await SuperHero.findOneAndDelete({ nombreSuperheroe: nombre });
  }

  async obtenerPorId(id) {
    return await SuperHero.findById(id);
  }

  async obtenerTodos() {
    return await SuperHero.find({});
  }

  async buscarPorAtributo(atributo, valor) {
    let query = {};
    if (typeof valor === 'string' && atributo === 'edad') {
      if (isNaN(Number(valor))) {
        console.error("El valor no es un número válido");
        valor = 0;
      }
      query[atributo] = Number(valor);  
    } else if (typeof valor === 'string' && atributo !== 'edad') {
      query[atributo] = new RegExp(valor, 'i');
    } else if (typeof valor === 'number') {
      query[atributo] = valor;
    }
    return await SuperHero.find(query);
  }

  async obtenerMayoresDe30() {
    return await SuperHero.find({ edad: { $gt: 30 }, planetaOrigen: 'Tierra', poderes: { $gte: 2 } });
  }
}

export default SuperHeroRepository;