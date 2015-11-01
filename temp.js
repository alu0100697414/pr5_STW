"use strict"; // Sirve para dar mensajes de error y asi encontrarlos antes.

// Clase Medida
function Medida() {
  this.valor_;
  this.tipo_;
}

// Clase Temperatura
function Temperatura() {
  Medida.call(this);
}

// Indicamos que Temperatura hereda de Medida.
Temperatura.prototype = new Medida();

module.exports = Temperatura;


// Inicializador
Temperatura.prototype.inicializador = function(temp){
  var exp_regular = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([fFcC])/;
  var valor = temp.match(exp_regular);

  this.set_valor(parseFloat(valor[1]));
  this.set_tipo(valor[2]);
}


// Setters y Getters de la clase Medida
Medida.prototype.get_valor = function(){
  return this.valor_;
}

Medida.prototype.get_tipo = function(){
  return this.tipo_;
}

Medida.prototype.set_valor = function(valor){
  this.valor_ = valor;
}

Medida.prototype.set_tipo = function(tipo){
  this.tipo_ = tipo;
}

Temperatura.prototype.conversor = function(){

  if(this.get_tipo() === 'C' || this.get_tipo() ==='c'){
    var res = (this.get_valor()*(9/5))+32;
    return ("El resultado es: " + res + " " + "F");
  }

  else {
    var res = (this.get_valor()-32)*(5/9);
    return ("El resultado es: " + res + " " + "C");
  }
}
