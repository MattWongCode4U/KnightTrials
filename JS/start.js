function startGame(){
	test();
}

function test(){
	var t = document.createElement("p");
	var node1 = document.createTextNode("Knight Trials");
	t.appendChild(node1);
	t.setAttribute("id","test");
	t.setAttribute("class","getRidOf");
	document.body.appendChild(t);
	
	var docWidth = $(document).width();
	var docCenter = (docWidth/2);
	var titleWidth = $("#test").width();
	var centerThis = (titleWidth/2)
	
	$("#test").css("position","absolute");
	$("#test").css("left", (docCenter-centerThis)+"px");
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