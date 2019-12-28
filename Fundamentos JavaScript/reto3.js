var martin = {
  nombre: 'Martin',
  apellido: 'Matayoshi',
  edad: 32
}
function mayoriaEdad(persona){
  if (persona.edad >= 18) {
    console.log('eres mayor de edad')
  } else {
    console.log('eres menor de edad')
  }
}
mayoriaEdad(martin)
