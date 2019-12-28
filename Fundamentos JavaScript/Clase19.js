var martin = {
  nombre: 'Martin',
  altura: 1.78
}
var tania = {
  nombre: 'Tania',
  altura: 1.55
}

var personas = [martin, tania]

const pasarAlturaACms = persona => {
  return {
  ...persona,
  altura: persona.altura * 100
  }
}
//modifica la altura pero permite acceder al estado original de lo modificado

var personasCms = personas.map(pasarAlturaACms)
//map cambia sirve para transformar elementos en este caso de mts a cms
//sobre persona se ejecuta la funcion map, que va a modificar personana altura para
//retornar persona como valor cambiado (generando un nuevo array)
console.log(personasCms)


//const pasarAlturaACms = persona => {
//  persona.altura *= 100
//  //transforma la altura a cm
//  return persona
//}

//eso modifica permanentemente
