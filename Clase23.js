//En esta clase explicamos por qué al introducir el arrow function salió un error.
//El error del contexto de this en javascrip es uno de los errores más comunes.
//Recuerda que dentro de la arrow function, this está haciendo referencia al espacio global,
//a windows.

function persona (nombre, apellido, altura){
  // entre () van los parametros
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

const ALTURA_MAXIMA = 1.6

persona.prototype.estatura = function (){
  if (this.altura >= ALTURA_MAXIMA){
    console.log(`Hola soy ${this.nombre} y soy alto`)
  } else {
    console.log(`Hola soy ${this.nombre} y soy bajo`)
  }
}
persona.prototype.saludar = function (){
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

persona.prototype.soyAlto = function(){
  return this.altura > 1.6
}
//en este caso this.altura no es reconocido como funcion
//las funciones siempre tienen que estar juntas osino no se ejecuta el codigo

//persona.prototype.soyAlto = function() => this.altura > 1.6
//esta arrow function da como resultado a todo false aunque marrtin y lorena sean true
//porque en este caso this.altura no es reconocido como funcion ya que this, en una arrow function,
//busca el objeto fuera de la funciones, no EN las funciones

var martin = new persona('Martin', 'Matayoshi', 1.78)
var andres = new persona('Andres', 'Aviles', 1.55)
var lorena = new persona('Lorena', 'Matayoshi', 1,65)
// new, seguido del prototipo, genera un objeto
//martin al tener el prototipo persona, equivale a un return a la linea 1

martin.estatura()
andres.estatura()
