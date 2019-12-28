var contador = 0

const llueve = () => Math.random() < 0.25
//probabilidad de 0.25% de que llueva

do {
  //contador =+ 1
  contador ++
} while (!llueve())
if (contador == 1) {
  console.log(`uyy mirá fui una ves y si esta lloviendo`)
} else {
  console.log (`fui ${contador} veces y no esta lloviendo`)
}
