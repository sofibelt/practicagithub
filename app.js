class Usuario{
  constructor(nombre,universidad){
    this.nombre=nombre;
    this.universidad=universidad;
  }

get  id(){
    return this.nombre;
  }

get  idu(){
    return this.univeridad;
  }
}



const usuario1= new Usuario('ana','tecnologica');
console.log(usuario1.id);
