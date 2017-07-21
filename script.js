

$(document).ready(function(){

	$( init );


	//Обработчик события
	function init(){
		$('#button').bind('click', cycle);
	};


	//Функция очищает блок и заполняет его указанным количеством клеток
	function cycle(){


		$('div.cd').remove();


		//Запрашиваю количество
		var anw = prompt("Сколько кубиков оставить?", "16");

		//Вычисляю квадратный корень ответа
		var cor = Math.sqrt(anw);

		//Рассчитываю размер одного блока
		
		var i = $('div.content').width() - cor*2;
		
		var bSize = i / cor + 'px';

		console.log(bSize);

		//Вывожу нужное количество блоков
		
		var bl = $('.cd').length;
		while (bl < anw) {
			$('div.content').append('<div class="cd"></div>');
			bl = $('.cd').length;
		}

		//Меняю размер блоков в соответствии с количеством эл-тов

		$('.cd').height(bSize);
		$('.cd').width(bSize);


		$('.cd').mouseenter(function(){
			$(this).css({"background-color":"yellow"})
			$('.cd').mouseleave(function(){
				$(this).css({"background-color":"black"})	
		});
	});
	};

	
});




