var martin = {
  nombre: 'Martin',
  apellido: 'Matayoshi',
  edad: 32

}

function mayuscula(persona) {
  //var nombre = persona.nombre
  //son lo mismo
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

mayuscula(martin)
