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

const MENOR_DE_EDAD = 17
const esMenorDeEdad = ({ edad }) => edad <= MENOR_DE_EDAD

  function permitirAcceso(persona) {
    if(!esMenorDeEdad(persona)) {
      console.log('ES MENOR DE EDAD')
    }
  }
permitirAcceso(martin)
