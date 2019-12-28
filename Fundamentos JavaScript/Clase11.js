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
const MAYORIA_DE_EDAD = 18 //las constantes se escriben con mayuscula y _ son como variables no modificables

function esMayorDeEdad(persona){
  return persona.edad >= MAYORIA_DE_EDAD //return retorna el valor generado en este caso el valor de la edad
//return persona.edad >= 18 es preferible crear una var por el valor 18 para que el codigo se lea mejor
}

function imprimirSiEsMayor(persona){
  if (esMayorDeEdad(persona)){
    console.log(`${persona.nombre} es mayor de edad`)
    } else {
  console.log(`${persona.nombre} es menor de edad`)
  }
}
imprimirSiEsMayor(martin)
