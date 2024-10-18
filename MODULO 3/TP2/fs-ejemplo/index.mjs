import fs from 'fs';

// Leer un archivo de manera asincrona
fs.readFile('./data/example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Contenido del archivo: ', data);
});

// Escribir en un nuevo archivo
fs.writeFile('./data/newfile.txt', 'Este es un nuevo archivo', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Archivo creado exitosamente');
});

// Renombrar el archivo
fs.rename('./data/newfile.txt', './data/rename_file.txt', (err) => {
  if (err) {    
    console.error(err);
    return;
  }
  console.log('Archivo renombrado exitosamente');
});