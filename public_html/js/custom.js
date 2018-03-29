//funciones para cambiar el color del menu al pasar el mouse sobre un item de la lista//

$(document).ready(function(){
	$(".lista1").hover(function(){
		$(".lista1").css("color", "#FFF");
		}, function(){
			$(".lista1").css("color", "#CCC");
		});
});
$(document).ready(function(){
	$(".lista2").hover(function(){
		$(".lista2").css("color", "#FFF");
		}, function(){
			$(".lista2").css("color", "#CCC");
		});
});
$(document).ready(function(){
	$(".lista3").hover(function(){
		$(".lista3").css("color", "#FFF");
		}, function(){
			$(".lista3").css("color", "#CCC");
		});
});

$(document).ready(function(){
	$(".card").flip({
	  axis: 'y',
	  trigger: 'hover'
	});
});
