'use strict'
window.onload = (function() {
  function Quize() {
  	console.log('hello');
  	this.startGame();
  	this.getTask();
  }
  Quize.prototype.startGame = function() {
  	this.start = document.getElementsByClassName('start')[0];
  	this.start.onclick = function() {
	    console.log('click');
	  };
	Quize.prototype.getTask = function(a,b) {
		a = getRandomInt(1,20);
		b = getRandomInt(1,20);
		console.log(a,b);
	}
  };
  var quize = new Quize();

  function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  }

 });