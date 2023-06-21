

(function (window) {
	var speakWord = "Good Bye";
  
	var bye = {};
	bye.speak = function (name) {
	  console.log(speakWord + " " + name);
	};
  
	window.bye = bye;
  })(window);
  
