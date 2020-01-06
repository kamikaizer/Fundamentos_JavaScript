//dentro de la {} se pueden agrupar objetos a una var, para no repetir variables

var martin = {
  nombre: 'Martin',
  apellido: 'Matayoshi',
  edad: 32
}
var tania = {
  nombre: 'Tania',
  apellido: 'Aviles',
  edad: 31
}
var haru = {
  nombre: 'Lorena',
  apellido: 'Matayoshi',
  edad: 12
}
//dentro de las var se pueden identificar las key  value
//function mayuscula(nombre) {
//  nombre = nombre.toUpperCase()
//  console.log(nombre)
//}

//mayuscula(martin.nombre)
//mayuscula(haru.nombre)
//mayuscula(tania.nombre)

//tambien se puede escribir asi para simplificar el codigo
function mayuscula({ nombre }) {
  console.log(nombre = nombre.toUpperCase())
}

mayuscula(martin)
mayuscula(haru)
mayuscula(tania)
