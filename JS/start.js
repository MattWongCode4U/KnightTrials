function startGame(){
	test();
}

function test(){
	var t = document.createElement("span");
	var node1 = document.createTextNode("Knight Trials");
	t.appendChild(node1);
	t.setAttribute("id","test");
	t.setAttribute("class","getRidOf");
	document.body.appendChild(t);
	
	// var docWidth = $(document).width();
	// var docCenter = (docWidth/2);
	// var titleWidth = ($("#test").width());
	// var half = (titleWidth/2);
	// var correctNum = (docCenter-half);
 	
	// document.write(docWidth + " ");
	// document.write(docCenter + " ");
	// document.write(titleWidth + " ");
	// document.write(half + " ");
	// document.write(correctNum + " ");
	
	$("#test").css('text-align','center');
	$("#test").css("width","100%");
	$("#test").css("left","0");
	
	 $("#test").css("position","absolute");
	// $("#test").css("left", (docCenter - ($("#test").width()/2) ) + "px");
	// $("#test").css("left", correctNum+"px");
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