 import express, { text } from 'express';
 import path from 'path';
 import expressLayout from 'express-ejs-layouts';
import { title } from 'process';

 const app = express();
 const PORT = 3000;

 //Configurar EJS como motor de plantillas
 app.set('view engine','ejs');
 app.set('views',path.resolve('./views'));

 //Configurar express-ejs-layouts
 app.use(expressLayout);
 app.set('layout','layout');// Archivo base de layout

 //Servir archivos estaticos
 app.use(express.static(path.resolve('./public')));

 //Ruta principal
 app.get('/',(req,res)=>{
    res.render('index',{title: 'Pagina Principal'});
 });

 //Ruta para la pagina Acerca de
 app.get('/about',(req, res)=>{
    res.render('about',{title: 'Acerca de Nosotros'});
 });

 //Ruta para la pagina de Contacto
 app.get('/contact',(req,res)=>{
    res.render('contact',{title: 'Contactanos'});
 });

 //Iniciar el servidor
 app.listen(PORT, () => {
    console.log('Servidor ejecutandose en http://localhost:${PORT}');
 });
