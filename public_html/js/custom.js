$(document).ready(function(e) {
	$(".boxImagen").mouseover(function(){
		var id = $(this).attr('id').substr(-1);
			$("#imagen" + id).css("opacity", "0.1");
			$("#imagen" + id).css("background-color", "#F4F4F4");
			$("#texto" + id).css("visibility", "visible");
			$("#imagen" + id).css("transition-duration", "1s");
			$("#imagen" + id).css("color", "#FFF");
		})
	$(".boxImagen").mouseleave(function(){
		var id = $(this).attr('id').substr(-1);
			$("#imagen" + id).css("opacity", "1");
			$("#imagen" + id).css("background-color", "#6a8cc7");
			$("#texto" + id).css("visibility", "hidden");
			$("#imagen" + id).css("transition-duration", "1s");
			$("#imagen" + id).css("color", "#000");
	})

	$(".lista1").hover(function(){
		$(".lista1").css("background-color", "#00102A");
		$(".lista1").css("transition-duration", "1s");
		$(".lista1").css("color", "#FFF");
		}, function(){
			$(".lista1").css("background-color", "#F4F4F4");
			$(".lista1").css("transition-duration", "1s");
			$(".lista1").css("color", "#000");
		});

	$(".lista2").hover(function(){
		$(".lista2").css("background-color", "#00102A");
		$(".lista2").css("transition-duration", "1s");
		$(".lista2").css("color", "#FFF");
		}, function(){
			$(".lista2").css("background-color", "#F4F4F4");
			$(".lista2").css("transition-duration", "1s");
			$(".lista2").css("color", "#000");
		});

	$(".lista3").hover(function(){
		$(".lista3").css("background-color", "#00102A");
		$(".lista3").css("transition-duration", "1s");
		$(".lista3").css("color", "#FFF");
		}, function(){
			$(".lista3").css("background-color", "#F4F4F4");
			$(".lista3").css("transition-duration", "1s");
			$(".lista3").css("color", "#000");
		});

	$(".lista4").hover(function(){
		$(".lista4").css("background-color", "#00102A");
		$(".lista4").css("transition-duration", "1s");
		$(".lista4").css("color", "#FFF");
		}, function(){
			$(".lista4").css("background-color", "#F4F4F4");
			$(".lista4").css("transition-duration", "1s");
			$(".lista4").css("color", "#000");
		});
		
		function texto1(){
			document.getElementById("detalle").innerHTML = "Realizamos diseño de paginas";
		}
		function texto2(){
			document.getElementById("detalle").innerHTML = "Realizamos aplicaciones web";
		}
		function texto3(){
			document.getElementById("detalle").innerHTML = "Realizamos aplicaciones de escritorio";
		}
		function texto4(){
			document.getElementById("detalle").innerHTML = "Realizamos asesorias";
		}
		
		$("#boxImagen1").click(function(){
			if($(".detalle").is(":visible")){
				$(".detalle").hide(500);
				$(".detalle").show(1000,texto1());
			}else{
				$(".detalle").show(1000,texto1());
			}
		});
		$("#boxImagen2").click(function(){
			if($(".detalle").is(":visible")){
				$(".detalle").hide(500);
				$(".detalle").show(1000,texto2());
			}else{
				$(".detalle").show(1000,texto2());
			}
		});
		$("#boxImagen3").click(function(){
			if($(".detalle").is(":visible")){
				$(".detalle").hide(500);
				$(".detalle").show(1000,texto3());
			}else{
				$(".detalle").show(1000,texto3());
			}
		});
		$("#boxImagen4").click(function(){
			if($(".detalle").is(":visible")){
				$(".detalle").hide(500);
				$(".detalle").show(1000,texto4());
			}else{
				$(".detalle").show(1000,texto4());
			}
		});

	$('ul li a').click(function(e){				
		e.preventDefault();		//evitar el eventos del enlace normal
		var strAncla=$(this).attr('href'); //id del ancla
			$('body,html').stop(true,true).animate(
			{				
				scrollTop: $(strAncla).offset().top
			},1000);
		
	});
	//posicionarMenu();

	$(window).scroll(function() {    
		posicionarMenu();
	});
	
	function posicionarMenu() {
		var altura_del_header = $('#cabecera').outerHeight(true);
		var altura_del_menu = $('.menuu').outerHeight(true);
	
		if ($(window).scrollTop() >= altura_del_header){
			$('.menuu').addClass('fixed');
			$('.wrapper').css('margin-top', (altura_del_menu) + 'px');
		} else {
			$('.menuu').removeClass('fixed');
			$('.wrapper').css('margin-top', '0');
		}
	}
	
});
