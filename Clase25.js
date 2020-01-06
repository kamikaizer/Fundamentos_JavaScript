//Las clases de JavaScript son introducidas en el ECMAScript 2015 y son una
//mejora en la sintaxis sobre la herencia basada en prototipos de JavaScript.
//La palabra clave extends se usa en declaraciones de clase o expresiones de clase
//para crear una clase que es hija de otra clase.
//El método constructor es un método especial para crear e inicializar un objeto
//creado a partir de una clase.


function heredaDe(prototipoHijo, prototipoPadre){
  var fn = function (){}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
}

//linea 11 es una funcion vacia fn tambien se puede escribir como noop

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
