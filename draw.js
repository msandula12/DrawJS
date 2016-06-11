(function(){
 
 	// Initialize settings
 	var drawShape = "small";
 	var drawSize  = "circle";
 	var drawColor = "black";
 	var randomId  = 1;

	// Create containing element for each line
	function drawDiv() {
		var drawDiv = document.createElement("div");
		drawDiv.id = "drawDiv" + randomId;
		$("#canvasDiv").append(drawDiv);
	}

	// Draw line
	function drawLine() {
		var drawLine = document.createElement("div");
		drawLine.className = "draw";
		$(drawLine).addClass(drawShape);
		$(drawLine).addClass(drawSize);
		$(drawLine).addClass(drawColor);
		drawLine.style.left = (event.pageX - 4) + "px"; 
		drawLine.style.top  = (event.pageY - 4) + "px";
		$("#canvasDiv").children().last().append(drawLine);
	}

	// Function to enable buttons
	function enableButton(buttonId){
		if ($("#canvasDiv").has("div").length > 0) {
			$(buttonId).prop("disabled", false);
			$(buttonId).removeClass("disabled");
		}
	}	

	// Function to disable buttons
	function disableButton(buttonId){
		if ($("#canvasDiv").has("div").length === 0) {
			$(buttonId).prop("disabled", true);
			$(buttonId).addClass("disabled");
		}
	}	

	// Back-1, Clear buttons are disabled on load
	disableButton("#clear");
	disableButton("#stepBack");

	// Draw while mouse is held down
	$("#canvasDiv").mousedown(function() {
		drawDiv();
	    $(this).mousemove(function() {
	        drawLine();
	    });
	}).mouseup(function() {
	    $(this).unbind('mousemove');
	    enableButton("#clear");
		enableButton("#stepBack");
	    randomId++;
	});

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

	// Erase the most recent line drawn
	$("#stepBack").click(function() {
		$("#canvasDiv").children().last().remove();
		disableButton("#clear");
		disableButton("#stepBack");
	});


	// Clear the canvas
	$("#clear").click(function() {
		$("#canvasDiv").children().remove();
		disableButton("#clear");
		disableButton("#stepBack");
	});

})();