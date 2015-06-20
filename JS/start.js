function startGame(){
	test();
}

function test(){
	var t = document.createElement("p");
	var node1 = document.createTextNode("Hello Saar");
	t.appendChild(node1);
	t.setAttribute("id","test");
	document.body.appendChild(t);
	
	$("#test").css("position","absolute");
	$("#test").css("left","500px");
	$("#test").css("top","80px");
	$("#test").css("fontSize","300%");
	
	var startBtn = $('<input type="button" value="Start Game" id="start">');
	$("body").append(startBtn);
	
	$("#start").click(function() {
		$("#start").remove();
		$("p").remove();
	});
}