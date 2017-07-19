$(document).ready(function(){
	var bl = $('.cd').length;
	while (bl < 256) {
		$('div.content').append('<div class="cd"></div>');
		bl = $('.cd').length;
	}
	$('.cd').mouseenter(function(){
		$(this).css({"background-color":"yellow"})
		$('.cd').mouseleave(function(){
			$(this).css({"background-color":"black"})	
		});
	});
});



