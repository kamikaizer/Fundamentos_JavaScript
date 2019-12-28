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
//function imprimir(persona) {
//  var {nombre, apellido, edad} = persona
//  console.log(`hola, me llamo ${nombre} ${apellido} y tengo ${edad} años.`)
//}


//cada ves que se pregunte por martin le agregara un año
//function cumpleanos(persona){
//  persona.edad += 1
//}

//esto da como resultado un año mas en caso de preguntar cumpleanos(martin) y
//la edad real al preguntar por martin
function cumpleanos(persona){
  return{
    ...persona,
    edad: persona.edad + 1
    }
  }
