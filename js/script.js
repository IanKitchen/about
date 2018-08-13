$(document).ready(function(){
	$("#myButton").click(function(){alert("click")});
		
	$("#applicationDetails").hide();
		
	$("#application").click(function(){
		//$("#applicationSelectedIndicator").fadeTo("slow", 1);	
		if( $("#applicationSelectedIndicator").css('opacity') == 1 )
		{
			$("#applicationSelectedIndicator").fadeTo("fast", 0);
		}
		else
		{
			$("#applicationSelectedIndicator").fadeTo("fast", 1);
		}	
		
		$("#applicationDetails").fadeToggle("fast");
	})
	
	
	
});



