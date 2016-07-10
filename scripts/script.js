'use strict'
window.onload = (function() {
  function Quize() {
  	console.log('hello');
  	this.startGame();
  }
  Quize.prototype.startGame = function() {
  	this.start = document.getElementsByClassName('start')[0];
  	this.start.onclick = function() {
	    alert( 'Спасибо' );
	  };

  };
  Quize();
 });