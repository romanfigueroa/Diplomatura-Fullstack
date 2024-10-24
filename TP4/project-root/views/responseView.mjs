// views/responseView.mjs
export function renderizarSuperheroe(superheroe) {
    return JSON.stringify(superheroe, null, 2); // Convierte el objeto de superhéroe a JSON con formato legible
  }
  
  export function renderizarListaSuperheroes(superheroes) {
    return JSON.stringify(superheroes, null, 2); // Convierte el array de superhéroes a JSON con formato legible
  }
  