function startGame(){
	test();
}

function test(){
	var t = document.createElement("p");
	var node1 = document.createTextNode("Hello Saar");
	t.appendChild(node1);
	t.setAttribute("id","test");
	t.setAttribute("class","getRidOf");
	document.body.appendChild(t);
	
	var t = document.createElement("p");
	var node1 = document.createTextNode("ure mum");
	t.appendChild(node1);
	t.setAttribute("id","urmum");
	t.setAttribute("class","getRidOf");
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
	
	var deleteBtn = $('<input type="button" value="Delete text" id="del">');
	$("body").append(deleteBtn);
	
	$("#del").click(function() {
		$(".getRidOf").remove();
	});
	
	var deleteAll = $('<input type="button" value="delete all" id="deleteIt">');
	$("body").append(deleteAll)
	
	$("#deleteIt").click(function()
	{
		$(".getRidOf").remove();
		$("#urmum").remove();
		$("#start").remove();
		$("#del").remove();
		$("#deleteIt").remove();
		
	});

}