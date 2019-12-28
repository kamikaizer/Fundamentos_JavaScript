
var martin = {
  nombre: 'Martin',
  apellido: 'Matayoshi',
  edad: 32,
  peso: 68
}
const AUMENTO_DE_PESO = 0.2
const DIAS = 365
console.log(`Al inicio del año ${martin.nombre} pesó ${martin.peso} kilogramos`)

const aumentarDePeso = persona => persona.peso += AUMENTO_DE_PESO
const adelgazar = persona => persona.peso -= AUMENTO_DE_PESO

for (var i = 1; i <= DIAS; i++) {
  // var i = 1 contador comienza en 1
  // i <=360 el contador debe ser menor a 365 (un año)
  // i++ contador se imcrementa en 1 cada ves que se ejecuta el cod (dia 1, 2,3 etc...)
  var random = Math.random()
  //math.random dara numeros random entre 0 y 1

  if (random < 0.25){
    //aumenta de peso
    aumentarDePeso(martin)
  } else if (random < 0.5) {
    //adelgazar
    adelgazar(martin)
  }
}
console.log(`Al final del año ${martin.nombre} pesa ${martin.peso.toFixed(1)} kilogramos`)
