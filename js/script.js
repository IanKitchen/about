$(document).ready(function(){
	
	//set up by hidding details sections		
	$("#applicationDetails").hide();
	
	//use fadeTo to change opacity of indicator, but fadeToggle to show and hide the details section	
	$("#application").click(function(){
		if( $("#applicationSelectedIndicator").css('opacity') == 1 )
		{
			$("#applicationSelectedIndicator").fadeTo("fast", 0);
		}
		else
		{
			$("#applicationSelectedIndicator").fadeTo("fast", 1);
		}	
		
		$("#applicationDetails").fadeToggle("fast");
	});
	
	//illuminate labels on hover to indicate clickable elements
	$("#application").mouseenter(function(){
		$("#applicationHoverIndicator").css("color", "#4178BE");
	});
	
	$("#application").mouseleave(function(){
		$("#applicationHoverIndicator").css("color", "#aba6a6");
	});


	
});



