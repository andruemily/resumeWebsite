$(document).ready(function(){
	$('#imageContent').hover(function(){
		$("#imageContent").addClass('transition');
	}, function() {
		$("#imageContent").removeClass('transition');
	});
});