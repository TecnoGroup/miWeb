//funciones para cambiar el color del menu al pasar el mouse sobre un item de la lista//

$(document).ready(function(){
	$(".lista1").hover(function(){
		$(".lista1").css("background-color", "#00102A");
		$(".lista1").css("color", "#FFF");
		}, function(){
			$(".lista1").css("background-color", "#F4F4F4");
			$(".lista1").css("color", "#000");
		});
});
$(document).ready(function(){
	$(".lista2").hover(function(){
		$(".lista2").css("background-color", "#00102A");
		$(".lista2").css("color", "#FFF");
		}, function(){
			$(".lista2").css("background-color", "#F4F4F4");
			$(".lista2").css("color", "#000");
		});
});
$(document).ready(function(){
	$(".lista3").hover(function(){
		$(".lista3").css("background-color", "#00102A");
		$(".lista3").css("color", "#FFF");
		}, function(){
			$(".lista3").css("background-color", "#F4F4F4");
			$(".lista3").css("color", "#000");
		});
});
$(document).ready(function(){
	$(".lista4").hover(function(){
		$(".lista4").css("background-color", "#00102A");
		$(".lista4").css("color", "#FFF");
		}, function(){
			$(".lista4").css("background-color", "#F4F4F4");
			$(".lista4").css("color", "#000");
		});
});

$(document).ready(function(){
	$(".card").flip({
	  axis: 'y',
	  trigger: 'hover'
	});
});
