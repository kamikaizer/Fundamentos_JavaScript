var martin = {
  nombre: 'Martin',
  apellido: 'Matayoshi',
  edad: 32
}
var lorena = {
  nombre: 'Lorena',
  apellido: 'Matayoshi',
  edad: 12
}

var MAYORIA_DE_EDAD = 18

//const esMayorDeEdad = function (persona) {
//  return persona.edad >= MAYORIA_DE_EDAD
//}

const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD
//const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD //desestructura el objeto
//con funtion arrow se simplifica de 3 lineas a 1

function imprimirSiEsMayor(persona){
  if (esMayorDeEdad(persona)){
    console.log(`${persona.nombre} es mayor de edad`)
    } else {
  console.log(`${persona.nombre} es menor de edad`)
  }
}

function permitirAcceso(persona){
  if(!esMayorDeEdad(persona)) { // simbolo ! niega la condicion que siga
    console.log('ACCESO DENEGADO')
  }
  }

imprimirSiEsMayor(martin)
