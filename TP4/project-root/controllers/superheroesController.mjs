// controllers/superheroesController.mjs
import { obtenerSuperheroePorId, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30 } from '../services/superheroesService.mjs';
import { renderizarSuperheroe, renderizarListaSuperheroes } from '../views/responseView.mjs';

// Controlador para obtener un superhéroe por ID
export function obtenerSuperheroePorIdController(req, res) {
  const { id } = req.params;
  const superheroe = obtenerSuperheroePorId(parseInt(id)); // Aseguramos que ID sea número entero
  if (superheroe) {
    res.send(renderizarSuperheroe(superheroe));
  } else {
    res.status(404).send({ mensaje: "Superhéroe no encontrado" });
  }
}

// Controlador para buscar superhéroes por atributo
export function buscarSuperheroesPorAtributoController(req, res) {
  const { atributo, valor } = req.params; // Obtenemos el atributo y valor de los parámetros
  const superheroes = buscarSuperheroesPorAtributo(atributo, valor); // Llamamos al servicio correspondiente
  if (superheroes.length > 0) {
    res.send(renderizarListaSuperheroes(superheroes));
  } else {
    res.status(404).send({ mensaje: "No se encontraron superhéroes con ese atributo" });
  }
}

// Controlador para obtener superhéroes mayores de 30 años
export function obtenerSuperheroesMayoresDe30Controller(req, res) {
  const superheroes = obtenerSuperheroesMayoresDe30(); // Obtenemos los superhéroes mayores de 30
  res.send(renderizarListaSuperheroes(superheroes)); // Enviamos la lista renderizada de superhéroes
}
