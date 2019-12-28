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
function mensaje(nombre) {
  var {nombre, edad} = nombre
  console.log(`hola soy ${nombre} y tengo ${edad} años`)
}

mensaje(martin)
mensaje(tania)
