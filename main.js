$(document).ready(function() {
'use strict';

	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));
	
	var tool = new Tool(),
		k = 0;
	var c = Shape.Circle(200, 200, 80);
	c.fillColor = 'black';
	var text = new PointText(200, 200);
	text.justification = 'center';
	text.fillColor = 'white';
	text.fontSize = 20;
	text.content = 'hello world';
	tool.onMouseDown = function(event) {
	k++;	
	var c = Shape.Circle(event.point.x, event.point.y, 20);
	if (k%2 == 0){
		c.fillColor = 'green';
	} else {
		c.fillColor = 'red';
	};
	
	};

	paper.view.draw();


});