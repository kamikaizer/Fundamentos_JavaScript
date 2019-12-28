//arrays = arreglos

var martin = {
  nombre: 'Martin',
  apellido: 'Matayoshi',
  altura: 1.77
}
var tania = {
  nombre: 'Tania',
  apellido: 'Aviles',
  altura: 1.56
}
var haru = {
  nombre: 'Harumi',
  apellido: 'Matayoshi',
  altura: 1.66
}

var personas = [martin, tania, haru]

for (var i = 0; i < personas.length; i++) {
  // i contador desde 0
  // i va hasta la cantidad de personas que hay
  // cada siclo se incrementa la var i
  var persona = personas[i]
  // i es el indice de personas
  console.log(`${persona.nombre} mide ${persona.altura} mts`)
}
