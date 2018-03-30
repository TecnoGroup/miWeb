//funciones para cambiar el color del menu al pasar el mouse sobre un item de la lista//

$(document).ready(function(){
	$(".imagen1").hover(function(){
		$(".imagen1").css("opacity", "0.2");
		$(".back1").css("visibility", "visible");
		$(".back1").css("transition-duration", "1s");
		$(".imagen1").css("transition-duration", "1s");
		$(".imagen1").css("color", "#FFF");
		}, function(){
			$(".imagen1").css("opacity", "1");
			$(".back1").css("visibility", "hidden");
			$(".back1").css("transition-duration", "0.1s");
			$(".imagen1").css("transition-duration", "1s");
			$(".imagen1").css("color", "#000");
		});
});

$(document).ready(function(){
	$(".imagen2").hover(function(){
		$(".imagen2").css("opacity", "0.2");
		$(".back2").css("visibility", "visible");
		$(".back2").css("transition-duration", "1s");
		$(".imagen2").css("transition-duration", "1s");
		$(".imagen2").css("color", "#FFF");
		}, function(){
			$(".imagen2").css("opacity", "1");
			$(".back2").css("visibility", "hidden");
			$(".back2").css("transition-duration", "0.1s");
			$(".imagen2").css("transition-duration", "1s");
			$(".imagen2").css("color", "#000");
		});
});
$(document).ready(function(){
	$(".imagen3").hover(function(){
		$(".imagen3").css("opacity", "0.2");
		$(".back3").css("visibility", "visible");
		$(".back3").css("transition-duration", "1s");
		$(".imagen3").css("transition-duration", "1s");
		$(".imagen3").css("color", "#FFF");
		}, function(){
			$(".imagen3").css("opacity", "1");
			$(".back3").css("visibility", "hidden");
			$(".back3").css("transition-duration", "0.1s");
			$(".imagen3").css("transition-duration", "1s");
			$(".imagen3").css("color", "#000");
		});
});
$(document).ready(function(){
	$(".imagen4").hover(function(){
		$(".imagen4").css("opacity", "0.2");
		$(".back4").css("visibility", "visible");
		$(".back4").css("transition-duration", "1s");
		$(".imagen4").css("transition-duration", "1s");
		$(".imagen4").css("color", "#FFF");
		}, function(){
			$(".imagen4").css("opacity", "1");
			$(".back3").css("visibility", "hidden");
			$(".back3").css("transition-duration", "0.1s");
			$(".imagen4").css("transition-duration", "1s");
			$(".imagen4").css("color", "#000");
		});
});
$(document).ready(function(){
	$(".imagen5").hover(function(){
		$(".imagen5").css("opacity", "0.2");
		$(".back5").css("visibility", "visible");
		$(".back5").css("transition-duration", "1s");
		$(".imagen5").css("transition-duration", "1s");
		$(".imagen5").css("color", "#FFF");
		}, function(){
			$(".imagen5").css("opacity", "1");
			$(".back5").css("visibility", "hidden");
			$(".back5").css("transition-duration", "0.1s");
			$(".imagen5").css("transition-duration", "1s");
			$(".imagen5").css("color", "#000");
		});
});
$(document).ready(function(){
	$(".imagen6").hover(function(){
		$(".imagen6").css("opacity", "0.2");
		$(".back6").css("visibility", "visible");
		$(".back6").css("transition-duration", "1s");
		$(".imagen6").css("transition-duration", "1s");
		$(".imagen6").css("color", "#FFF");
		}, function(){
			$(".imagen6").css("opacity", "1");
			$(".back6").css("visibility", "hidden");
			$(".back6").css("transition-duration", "0.1s");
			$(".imagen6").css("transition-duration", "1s");
			$(".imagen6").css("color", "#000");
		});
});

$(document).ready(function(){
	$(".lista1").hover(function(){
		$(".lista1").css("background-color", "#00102A");
		$(".lista1").css("transition-duration", "1s");
		$(".lista1").css("color", "#FFF");
		}, function(){
			$(".lista1").css("background-color", "#F4F4F4");
			$(".lista1").css("transition-duration", "1s");
			$(".lista1").css("color", "#000");
		});
});
$(document).ready(function(){
	$(".lista2").hover(function(){
		$(".lista2").css("background-color", "#00102A");
		$(".lista2").css("transition-duration", "1s");
		$(".lista2").css("color", "#FFF");
		}, function(){
			$(".lista2").css("background-color", "#F4F4F4");
			$(".lista2").css("transition-duration", "1s");
			$(".lista2").css("color", "#000");
		});
});
$(document).ready(function(){
	$(".lista3").hover(function(){
		$(".lista3").css("background-color", "#00102A");
		$(".lista3").css("transition-duration", "1s");
		$(".lista3").css("color", "#FFF");
		}, function(){
			$(".lista3").css("background-color", "#F4F4F4");
			$(".lista3").css("transition-duration", "1s");
			$(".lista3").css("color", "#000");
		});
});
$(document).ready(function(){
	$(".lista4").hover(function(){
		$(".lista4").css("background-color", "#00102A");
		$(".lista4").css("transition-duration", "1s");
		$(".lista4").css("color", "#FFF");
		}, function(){
			$(".lista4").css("background-color", "#F4F4F4");
			$(".lista4").css("transition-duration", "1s");
			$(".lista4").css("color", "#000");
		});
});
$(document).ready(function(){
	$(".card").flip({
	  axis: 'x',
	  trigger: 'hover'
	});
});