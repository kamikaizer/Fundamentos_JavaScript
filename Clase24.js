//Los objetos en JavaScript son “contenedores” dinámicos de propiedades.
//Estos objetos poseen un enlace a un objeto prototipo. Cuando intentamos
//acceder a la propiedad de un objeto, la propiedad no sólo se busca en el
//propio objeto sino también en el prototipo del objeto, en el prototipo del
//prototipo, y así sucesivamente hasta que se encuentre una propiedad que
//coincida con el nombre o se alcance el final de la cadena de prototipos.

function heredaDe(prototipoHijo, prototipoPadre){
  var fn = function (){}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
}

//linea 9 es una funcion vacia fn tambien se puede escribir como noop

function persona(nombre, apellido, altura){
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

persona.prototype.saludar = function(){
  console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}
persona.prototype.altura = function(){
  return this.altura > 1.6
}

function desarrollador(nombre, apellido){
  this.nombre = nombre
  this.apellido = apellido
}

heredaDe(desarrollador, persona)

desarrollador.prototype.saludar = function(){
  console.log(`hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
}

var tania = new persona ('tania', 'aviles', 1.55)
var haru = new persona ('haru', 'matayoshi', 1.60)
var martin = new persona ('martin', 'matayoshi', 1.75)
