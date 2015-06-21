//Starts the game
function startGame(){
	text();
	buttons();
}

//creates the text of the start page
function text(){
	//Creates the title text
	var t = document.createElement("span");
	var node1 = document.createTextNode("Knight Trials");
	t.appendChild(node1);
	t.setAttribute("id","title");
	t.setAttribute("class","getRidOf");
	document.body.appendChild(t);
	
	//title styling
	$("#title").css('text-align','center');
	$("#title").css("width","100%");
	$("#title").css("left","0");
	$("#title").css("position","absolute");
	$("#title").css("fontSize","300%");
}

//creates the buttons of the start page
function buttons(){
	//creates start button
	var startBtn = $('<input type="button" value="Start Game" id="start">');
	$("body").append(startBtn);
	
	//start button functionality
	$("#start").click(function() {
		$("#start").remove();
		$("p").remove();
	});
	
	//creates delete button
	var deleteBtn = $('<input type="button" value="Delete text" id="del">');
	$("body").append(deleteBtn);
	
	//delete button functionality
	$("#del").click(function() {
		$(".getRidOf").remove();
	});
	
	//creates deleteAll button
	var deleteAll = $('<input type="button" value="delete all" id="deleteIt">');
	$("body").append(deleteAll)
	
	//deleteAll button functionality
	$("#deleteIt").click(function()
	{
		$(".getRidOf").remove();
		$("#urmum").remove();
		$("#start").remove();
		$("#del").remove();
		$("#deleteIt").remove();
		
	});
}