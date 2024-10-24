// services/superheroesService.mjs
import SuperheroesFileRepository from '../repository/superheroesRepository.mjs';

const repository = new SuperheroesFileRepository();

// Obtener superhéroe por ID
export function obtenerSuperheroePorId(id) {
  const superheroes = repository.obtenerTodos(); // Obtenemos todos los superhéroes
  return superheroes.find(hero => hero.id === id); // Buscamos el superhéroe por ID
}

// Buscar superhéroes por atributo
export function buscarSuperheroesPorAtributo(atributo, valor) {
  const superheroes = repository.obtenerTodos(); // Obtenemos todos los superhéroes
  return superheroes.filter(hero =>
    String(hero[atributo]).toLowerCase().includes(valor.toLowerCase()) // Filtramos por el atributo y valor
  );
}

// Obtener superhéroes mayores de 30
export function obtenerSuperheroesMayoresDe30() {
  const superheroes = repository.obtenerTodos(); // Obtenemos todos los superhéroes
  return superheroes.filter(hero =>
    hero.edad > 30 && hero.planetaOrigen === 'Tierra' && hero.poder.length >= 2 // Condición para mayores de 30 y planeta Tierra
  );
}
