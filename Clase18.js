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

const esAlta = personas => personas.altura > 1.6
const esBaja = personas => personas.altura < 1.6
//consta esAlta = ({ altura }) => altura > 1.6

var personas = [martin, tania, haru]

var personasAlta = personas.filter(esAlta)
var personasBaja = personas.filter(esBaja)


// var personasAlta = persona.filter(function(persona){
//return persona.altura > 1.6
//})

console.log(personasAlta)
console.log(personasBaja)
