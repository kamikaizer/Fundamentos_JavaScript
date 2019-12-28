var martin = {
  nombre: 'Martin',
  apellido: 'Matayoshi',
  edad: 32,
  peso: 68
}

const INCREMENTO_PESO = 0.2
const DIAS = 365
const META = martin.peso - 3
var dias = 0

const aumentaDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4


while (martin.peso > META) {
  //el codigo entre {} se repetira hasta que se cumpla
  //la condicion de los ()
  if (comeMucho()){
    //aumenta de peso
    aumentaDePeso(martin)
  }
  if (realizaDeporte()){
    //baja de peso
    adelgazar(martin)
}
  dias += 1
}
console.log(`pasaron ${dias} dia hasta que ${martin.nombre} adelgazo 3 kg`)
