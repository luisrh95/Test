$(document).ready(function(){
	
	$('[class*="videobeam"]').append('<div class="video_play"><img src="img/core-img/video.png" title="Reproducir video" alt="Reproducir video"/></div>');
	
	$('[class*="videobeam"]').click(function(){
		
	var youtlenk = $(this).attr('youtube');
		
	$('body').append('<div id="screen_video">'+
					  '<div>'+
					 	'<div class="button">X</div>'+
					     '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+youtlenk+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'+
					  '</div>'+
				     '</div>');
	$('body').attr('style', 'overflow-y: hidden !important;');
		
		
	$('.button').click(function(){
		$('#screen_video').remove();
		$('body').attr('style', 'overflow-y: auto !important;');	
	});		
	});
	
	
	$('#tab_1').click(function(){
		
		$('#tab_2').attr('class', 'btn_tab ');
		$('#tab_1').attr('class', 'btn_tab active');
		$('#form').css('display', 'block');
		$('.mi_perfil').css('display', 'none');
		
	});
	
	$('#tab_2').click(function(){
		
		$('#tab_2').attr('class', 'btn_tab active');
		$('#tab_1').attr('class', 'btn_tab');
		$('#form').css('display', 'none');
		$('.mi_perfil').css('display', 'block');
		
	});
	
	

// validar campos de registro
	


//FUNCION PARA VALIDAR CAMPOS DE TEXTO
	
$('#user').keyup(function(){
	
	
	var elemento = $(this).val();
	
	var nombre = $(this).val();

	if($.trim(elemento).length >= 5){
			
	 $(this).attr('class', 'true');
	 var val = $(this).attr('id');
	 window[val] = 'true';
	 	
	 $('[for*="user"]').css('background-color','#C4B5E8');
		
	 }else{
		
	 $(this).attr('class', 'false');
	 var val = $(this).attr('id');
	 window[val] = 'false';
		 
	 $('[for*="user"]').css('background-color','#EAA2A2');
		
	 }
	
});
	
$('#apell').keyup(function(){
	
	var elemento = $(this).val();

	if($.trim(elemento).length >= 5){
			
	 $(this).attr('class', 'true');
	 var val = $(this).attr('id');
	 window[val] = 'true';
	 	
	 $('[for*="apell"]').css('background-color','#C4B5E8');
		
	 }else{
		
	 $(this).attr('class', 'false');
	 var val = $(this).attr('id');
	 window[val] = 'false';
		 
	 $('[for*="apell"]').css('background-color','#EAA2A2');
		
	 }
	
});
	
$('#pass').keyup(function(){
	
	var elemento = $(this).val();

	if($.trim(elemento).length > 1){
			
	 $(this).attr('class', 'true');
	 var val = $(this).attr('id');
	 window[val] = 'true';
	 	
	 $('[for*="pass"]').css('background-color','#C4B5E8');
		
	 }else{
		
	 $(this).attr('class', 'false');
	 var val = $(this).attr('id');
	 window[val] = 'false';
		 
	 $('[for*="pass"]').css('background-color','#EAA2A2');
		
	 }
	
});
	
// VALIDAR EMAIL
	
$('#correo').keyup(function(){
	
	var email = $(this).val();
	
	function valid_email(email){
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
	}

	if($.trim(email).length >= 5  && valid_email(email)){
			
	 $(this).attr('class', 'true');
	 var val = $(this).attr('id');
	 window[val] = 'true';
		
	 $('[for*="correo"]').css('background-color','#C4B5E8');
	 	
	 }else{
		
	 $(this).attr('class', 'false');
	 var val = $(this).attr('id');
	 window[val] = 'false';
		 
	 $('[for*="correo"]').css('background-color','#EAA2A2');
		
	 }
	
});
	
//validar pregunta
	
$('#como').keyup(function(){
	
	var elemento = $(this).val();

	if($.trim(elemento).length > 1){
			
	 $(this).attr('class', 'true');
	 var val = $(this).attr('id');
	 window[val] = 'true';
	 	
	 $('#como').css('background-color','#C4B5E8');
		
	 }else{
		
	 $(this).attr('class', 'false');
	 var val = $(this).attr('id');
	 window[val] = 'false';
		 
	 $('#como').css('background-color','#EAA2A2');
		
	 }
	
});	

// login
	
$('#nick').keyup(function(){
	
	var elemento = $(this).val();

	if($.trim(elemento).length >= 5){
			
	 $(this).attr('class', 'true');
	 var val = $(this).attr('id');
	 window[val] = 'true';
	 	
	 $('#nick').css('background-color','#C4B5E8');
		
	 }else{
		
	 $(this).attr('class', 'false');
	 var val = $(this).attr('id');
	 window[val] = 'false';
		 
	 $('#nick').css('background-color','#EAA2A2');
		
	 }
	
});
	
$('#password').keyup(function(){
	
	var elemento = $(this).val();

	if($.trim(elemento).length >= 5){
			
	 $(this).attr('class', 'true');
	 var val = $(this).attr('id');
	 window[val] = 'true';
	 	
	 $('#password').css('background-color','#C4B5E8');
		
	 }else{
		
	 $(this).attr('class', 'false');
	 var val = $(this).attr('id');
	 window[val] = 'false';
		 
	 $('#password').css('background-color','#EAA2A2');
		
	 }
	
});
	
// OPEN MODAL
	
	$("#registro").on('submit',(function(event) {
	event.preventDefault();
    if(user === 'true' && apell === 'true' && correo === 'true' && pass === 'true' && como === 'true'){

	$('body').append('<div id="screen">'+
					  '<div>'+
					     'Hola '+$('#user').val()+' '+$('#apell').val()+', tu correo es '+$('#correo').val()+'<br/> tu contraseña '+$('#pass').val()+' '+
					     'y nos encontraste en '+$('#como').val()+'. '+
					     '<div class="button">Aceptar</div>'+
					  '</div>'+
				     '</div>');
	$('body').attr('style', 'overflow-y: hidden !important;');
		
	$('.button').click(function(){
		$('#screen').remove();
		$('body').attr('style', 'overflow-y: auto !important;');	
	});
		
	}else{
		
	$('body').append('<div id="screen">'+
					  '<div>'+
					     'Completa todos los campos.'+
					     '<div class="button">Aceptar</div>'+
					  '</div>'+
				     '</div>');
	$('body').attr('style', 'overflow-y: hidden !important;');
		
	$('.button').click(function(){
		$('#screen').remove();
		$('body').attr('style', 'overflow-y: auto !important;');	
	});
		
	}

	}));
	
	
	
	$("#logine").on('submit',(function(event) {
	event.preventDefault();
    if(nick === 'true' && password === 'true'){

	$('body').append('<div id="screen">'+
					  '<div>'+
					     'Hola '+$('#nick').val()+', tu contraseña es '+$('#password').val()+' '+
					     '<div class="button">Aceptar</div>'+
					  '</div>'+
				     '</div>');
	$('body').attr('style', 'overflow-y: hidden !important;');
		
	$('.button').click(function(){
		$('#screen').remove();
		$('body').attr('style', 'overflow-y: auto !important;');	
	});
		
	}else{
		
	$('body').append('<div id="screen">'+
					  '<div>'+
					     'Completa todos los campos.'+
					     '<div class="button">Aceptar</div>'+
					  '</div>'+
				     '</div>');
	$('body').attr('style', 'overflow-y: hidden !important;');
		
	$('.button').click(function(){
		$('#screen').remove();
		$('body').attr('style', 'overflow-y: auto !important;');	
	});
		
	}

	}));

});
