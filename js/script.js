$(document).ready(function(){
	
	//set up by hidding details sections		
	$("#caseStudyDetails").hide();
	//$("#layout").hide();
	
	//show and hide the details for a case study	
	$(".flexContent").click(function(){	
		showDetails($(this).attr('id'));
	});
	
	//illuminate labels on hover to indicate clickable elements
	$(".flexContent").mouseenter(function(){
		caseHover($(this).attr('id'),true);
	});
	
	$(".flexContent").mouseleave(function(){
		caseHover($(this).attr('id'),false);
	});

	//handle case study hover effect
	function caseHover(selectorName, enter){
		var caseLabel = "#" + selectorName + "HoverIndicator";
		
		if(enter)
		{
			$(caseLabel).css("color", "#4178BE");
		}
		else
		{
			$(caseLabel).css("color", "#aba6a6");
		}
	}

	//handle click on a case study use fadeTo to change opacity of indicator, but fadeToggle to show and hide the details section
	function showDetails(selectorName){
		var indicatorName = "#" + selectorName + "SelectedIndicator";
			
		if( $(indicatorName).css('opacity') == 0 )
		{
			$(indicatorName).fadeTo("fast", 1);
			
			if( selectorName === "caseStudy1")
			{
				$("#caseStudy2SelectedIndicator").fadeTo("fast",0);
				$("#caseStudy3SelectedIndicator").fadeTo("fast",0);
				updateDetails("applicationRefresh");
			}

			if( selectorName === "caseStudy2")
			{
				$("#caseStudy1SelectedIndicator").fadeTo("fast",0);
				$("#caseStudy3SelectedIndicator").fadeTo("fast",0);
				updateDetails("activityView");
			}
			
			if( selectorName === "caseStudy3")
			{
				$("#caseStudy1SelectedIndicator").fadeTo("fast",0);
				$("#caseStudy2SelectedIndicator").fadeTo("fast",0);
				updateDetails("measuringConnectivity");
			}

			$("#caseStudyDetails").fadeIn("fast");
		}
		else
		{
			$(indicatorName).fadeTo("fast", 0);
			
			$("#caseStudyDetails").fadeOut("fast");
		}
	};
	
	function updateDetails(studyName){
		$("#detailsTitle").html(eval(studyName + "Title"));
		$("#details1").html(eval(studyName + "Text1"));
		$("#details2").html(eval(studyName + "Text2"));
		$("#details3").html(eval(studyName + "Text3"));
		//$('#detailsImage').attr('src',eval(studyName + "Image"));
	}

	
});


//Application Refresh
var applicationRefreshTitle = "Application Refresh";
var applicationRefreshText1 = " \
<b>The Problem</b> <br><br> \
The business had for a number of years prioritised new features over usability enhancements which resulted in a poor organisation of capabilities. \
Usability studies identified the need to rethink the organisation of the interface to reduce the learning curve for new users. <br><br> \
<b>Exploration</b> <br><br>	\
A review of similar products and of desktop conventions led us to decide on the adoption of a ribbon interface as the most appropriate solution. \
The was influenced by a key persona being our novice users who we had evidence would have had experience with the Office suite."
var applicationRefreshText2 = " \
<b>Command Categorisation</b>  <br><br> \
I conducted a number of card sorting exercises with users to understand their mental models. \
All commands in the current version of the product were printed on cards and users were asked to group them in a way that mirrored their way of working. <br><br> \
<b>Evaluation</b> <br><br> \
The proposed design was created in Axure and click counting tests used to evaluate the discoverability of the new arrangement. \
In many cases even experienced users found commands easier to find using the new design.";
var applicationRefreshText3 = " \
<b>Results</b> <br><br> \
The screenshot shows one the tabs in the new design featuring some of the 200 new icons I created. \
The release was a great success confirmed both by surveys and also by improved sales.";
var applicationRefreshImage = "images\\notebook_analysis_tab.png";

//Activity View
var activityViewTitle = "Activity View";
var activityViewText1 = " \
<b>The Problem</b> <br><br> \
We identified a need in our market around making sense of activity over time. <br><br> \
<b>Exploration</b> <br><br> \
In order to understand the use cases we visited customers and explored various end to end scenarios. \
It became clear that a solution should allow a lot of control over which data is shown and how it is summarised and ordered, \
but also it should detect and highlight potential contradictions, such as overlapping account activity.";
var activityViewText2 = " \
<b>Prototyping </b> <br><br> \
Initially paper prototypes were produced, these provided a way to get a feel for the most important interactions. \
PowerPoint prototyping was employed to express and demonstrate the structure. \
Finally Axure was employed to work up high fidelity mock-ups and explore the interaction in more detail. <br><br> \
<b>Evaluation</b> <br><br> \
Several Analysts were involved in evaluating the design. This continued into development where the tool was tested out with live user data.";
var activityViewText3 = " \
<b>The Solution</b> <br><br> \
Activity is visualised alongside a network graph. \
Selection between the views is coordinated allowing analysts to focus in on where in the network bursts of activity took placer see when a particular area of the network was most active.  <br><br> \
<b>Results</b> <br><br> \
The Activity View capability was an important factor in winning a number of bids. \
In particular it is used to understand activity which may be fraudulent in the commercial sector.";
var activityViewImage = "images\\activity_view.png";

//Measuring 
var measuringConnectivityTitle = "Measuring Connectivity";
var measuringConnectivityText1 = " \
<b>The Problem</b> <br><br> \
In many networks the nodes with the highest degree of connectivity are those the analyst will choose to analyse first. \
For smaller networks this is easy to see visually, but we found an increasing number of use cases where larger networks with directed links were being analysed <br><br> \
<b>Exploration</b> <br><br> \
Working with experts we identified a number of different measures, some related purely to the number of links, other based on direction or value each link. \
I worked with analyst to organise these options in a way that matched their mental model. ";
var measuringConnectivityText2 = " \
<b>Prototyping</b> <br><br> \
Visualising the flow of values in and out of each node or between pairs of nodes called for a custom visualisation. <br><br> \
<b>Evaluation</b> <br><br> \
After prototyping and testing a number of options I selected one which used the position of a bar to show the relative value in and out of each node then order to show highest to lowest \ ";
var measuringConnectivityText3 = " \
<b>The Solution </b> <br><br> \
Measures are clearly labelled and tooltips give extra details. Visually encoding the measures onto the network diagram and exporting the resulting visualisations in a number of formats for use in reports and presentations.</b> <br><br> \
<b>Results</b> <br><br> \
The senior subject matter expert described it as an enormous improvement. A very popular capability which has been further enhanced since first release.";
var measuringConnectivityImage = "images\\most_connected.png";
