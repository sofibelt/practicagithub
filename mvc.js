
const modelo = new Modelo(16);
const vista = new Vista(modelo.getn());
const control= new Controlador(modelo);

vista.numeroalumnos();
console.log(modelo.getn);
