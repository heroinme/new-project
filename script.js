$(document).ready(function(){
	var bl = $('.cd').length;
	while (bl < 256) {
		$('div.content').append('<div class="cd"></div>');
		console.log(bl);
		bl = $('.cd').length;
	}
});