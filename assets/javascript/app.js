$(window).scroll(() => {
	
	let pixFromTop = $(this).scrollTop();	

	$('.logo').css({
		'transform': `translate(0px, ${pixFromTop/5}%)`
	});

});


var projectListOne = [
	"<p>Mini Projects</p>",
	"<hr>",
	"<div><a href='https://henriquez93550.github.io/Crystal-Collector-Game/' target='_blank'>Crystal Collector Game</a></div>",
	"<div><a href='https://henriquez93550.github.io/Word-Guessing-Game/' target='_blank'>Word Guessing</a></div>",	
	"<div><a href='https://henriquez93550.github.io/TriviaGameMax/' target='_blank'>Trivia Game</a></div>",
	"<div><a href='https://henriquez93550.github.io/PetsProject/' target='_blank'>Pets Project Website</a></div>",
	];
		

	 




projectListOne.forEach((element) => {
	$("#projectListTwo").append(element);
})



$("#navWho").click(function() { 
	$('html,body').animate({
        scrollTop: $("#who").offset().top},800);           
});


$("#navPortfolio").click(function() { 
	$('html,body').animate({
        scrollTop: $("#portfolio").offset().top},1000);           
});


$("#navContact").click(function() { 
	$('html,body').animate({
        scrollTop: $("#footer").offset().top},1100);           
});






