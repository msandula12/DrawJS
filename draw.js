(function(){
 
 	var drawShape, drawSize, drawColor;

	// Define draw
	function draw() {
		var drawTool = document.createElement("div");
		drawTool.className = "draw";
		$(drawTool).addClass(drawShape);
		$(drawTool).addClass(drawSize);
		drawTool.id = drawColor;
		drawTool.style.left = (event.pageX - 4) + "px"; 
		drawTool.style.top = (event.pageY - 4) + "px";
		document.getElementById("canvasDiv").appendChild(drawTool);
	}

	// Define mouse movements
	document.onmousemove = mouseMove;
	document.onmousedown = mouseDown;
	document.onmouseup   = mouseUp;

	var mouseState = "up";

	// When mouse move
	function mouseMove(event) {
	    if (mouseState == "down") {
	        draw();
	    }
	}
	// When mouse down
	function mouseDown(event) {
	    mouseState = "down";
	}
	// When mouse up
	function mouseUp(event) {
	    mouseState = "up";
	}

	// Change shape tool to circle
	$("#circle").click(function() {
		$(".shape-palette").removeClass( "selected" );
		$(this).addClass( "selected" );
		drawShape = "circle";
	});

	// Change shape tool to square
	$("#square").click(function() {
		$(".shape-palette").removeClass( "selected" );
		$(this).addClass( "selected" );
		drawShape = "square";
	});	

	// Change size tool to small
	$("#small").click(function() {
		$(".size-palette").removeClass( "selected" );
		$(this).addClass( "selected" );
		drawSize = "small";
	});	

	// Change size tool to medium
	$("#medium").click(function() {
		$(".size-palette").removeClass( "selected" );
		$(this).addClass( "selected" );
		drawSize = "medium";
	});

	// Change size tool to large
	$("#large").click(function() {
		$(".size-palette").removeClass( "selected" );
		$(this).addClass( "selected" );
		drawSize = "large";
	});		

	// Change draw tool to black
	$("#black").click(function() {
		$(".color-palette").removeClass( "selected" );
		$(this).addClass( "selected" );
		drawColor = "black";
	});

	// Change draw tool to red
	$("#red").click(function() {
		$(".color-palette").removeClass( "selected" );
		$(this).addClass( "selected" );
		drawColor = "red";
	});

	// Change draw tool to orange
	$("#orange").click(function() {
		$(".color-palette").removeClass( "selected" );
		$(this).addClass( "selected" );
		drawColor = "orange";
	});

	// Change draw tool to yellow
	$("#yellow").click(function() {
		$(".color-palette").removeClass( "selected" );
		$(this).addClass( "selected" );
		drawColor = "yellow";
	});	

	// Change draw tool to green
	$("#green").click(function() {
		$(".color-palette").removeClass( "selected" );
		$(this).addClass( "selected" );
		drawColor = "green";
	});

	// Change draw tool to blue
	$("#blue").click(function() {
		$(".color-palette").removeClass( "selected" );
		$(this).addClass( "selected" );
		drawColor = "blue";
	});

	// Change draw tool to indigo
	$("#indigo").click(function() {
		$(".color-palette").removeClass( "selected" );
		$(this).addClass( "selected" );
		drawColor = "indigo";
	});

	// Change draw tool to violet
	$("#violet").click(function() {
		$(".color-palette").removeClass( "selected" );
		$(this).addClass( "selected" );
		drawColor = "violet";
	});	

	// Clear the canvas
	$("#clear").click(function() {
		console.log("yo");
		$("#canvasDiv").children().remove();
	});

})();