$( document ).ready(function(){
	
	$("#texto").keyup(function(){ validateInput(); });
	$("#texto").keydown(function(){ validateInput(); });
	$("#pass2").keyup(function(){
		repeatPassword();
	});

});

function validarLogin() {
	var $user = $("#exampleInputUser").val();
	var $usuarioValido = 'user';

	if ($user==$usuarioValido){
		$(".btn-iniciarSesion").removeAttr("type");
		$(".btn-iniciarSesion").removeAttr("data-toggle");
		$(".btn-iniciarSesion").removeAttr("data-target");
		$("#myModalL0").remove();

		$(".form-ingreso").attr("action","inicio.html");
	}
	else{
		$("#myModalL0").remove();
		/* Añadimos los atributos al boton */
		$(".btn-iniciarSesion").attr("type","button");
		$(".btn-iniciarSesion").attr("data-toggle","modal");
		$(".btn-iniciarSesion").attr("data-target","myModalL0");
		/* Creamos el modal */
		var m1 = $("<div class='modal fade' id='myModalL0' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' data-keyboard='false' data-backdrop='static'></div>");
		var m2 = $("<div class='modal-dialog' role='document'></div>");
		var m3 = $("<div class='modal-content'></div>");
		var m4 = $("<div class='modal-body text-center'><h4 style='font-size: 1.2em;'><i class='glyphicon glyphicon-remove'></i>  ¡Usuario inv&aacute;lido! <br><br> Por favor, intente de nuevo. </h4></div>");
		var m5 = $("<div class='modal-footer' style='background-color: #ffffff;'></div>");
		var m6 = $("<button type='button' class='btn btn-primary' data-dismiss='modal'>Cerrar</button></div>");
		/* Ordenamos */
		m6.appendTo(m5);
		m4.appendTo(m3);
		m5.appendTo(m3);
		m3.appendTo(m2);
		m2.appendTo(m1);
		$("#LoginInvalido").append(m1);
		$("#LoginInvalido .modal").modal("show");
		/* Limpiamos los inputs */
		$("#exampleInputUser").val("");
		$("#exampleInputPassword").val("");
	}

}

function validateInput(){
	var valor = document.getElementById("texto").value;

	if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
		$("#iconotexto").remove();
		$("#texto").parent().parent().attr("class","form-group has-error has-feedback");
		$("#texto").parent().children("span").attr("style","color: #FFF;").text(" ¡Debe ingresar un usuario!").show();
		$("#texto").parent().append("<span id='iconotexto' class='glyphicon glyphicon-remove form-control-feedback'></span>");
	  	return false;
	}
	else if( valor.match(/\d+/g) || valor.match(/ +/g) || !( valor.match(/^[\u0041-\u005A]*$/) || valor.match(/^[\u0061-\u007A]*$/) ) ){   // Verifica si hay numero, espacio y solamente a-z & A-Z
		$("#iconotexto").remove();
		$("#texto").parent().parent().attr("class","form-group has-error has-feedback");
		$("#texto").parent().children("span").attr("style","color: #FFF;").text("¡Solamente letras!").show();
		$("#texto").parent().append("<span id='iconotexto' class='glyphicon glyphicon-remove form-control-feedback'></span>");
		return false;
	}
	else{
		$("#iconotexto").remove();
		$("#texto").parent().parent().attr("class","form-group has-success has-feedback");
		$("#texto").parent().children("span").text("").hide();
		$("#texto").parent().append("<span id='iconotexto' class='glyphicon glyphicon-ok form-control-feedback'></span>");
		return true;
	}
}

function repeatPassword(){
	var valor1 = document.getElementById("pass1").value;
	var valor2 = document.getElementById("pass2").value;

	if ( valor2!=valor1) {
		$("#iconotexto2").remove();
		$("#pass2").parent().parent().attr("class","form-group has-error has-feedback");
		$("#pass2").parent().children("span").attr("style","color: #FFF;").text("Las contraseñas no coinciden").show();
		$("#pass2").parent().append("<span id='iconotexto2' class='glyphicon glyphicon-remove form-control-feedback'></span>");
		return false;
	} 
	else {
		$("#iconotexto2").remove();
		$("#pass2").parent().parent().attr("class","form-group has-success has-feedback");
		$("#pass2").parent().children("span").attr("style","color: #FFF;").text("Las contraseñas coinciden").show();
		$("#pass2").parent().append("<span id='iconotexto2' class='glyphicon glyphicon-ok form-control-feedback'></span>");
		return true;
	}
}

function desabilitarLogin(){
	$("span.help-block").hide();
	$(".btn-iniciarSesion").attr("disabled","true");
}

function habilitarLogin(){
	$(".btn-iniciarSesion").removeAttr("disabled");
}

function validarRegistro() {
	$("#myModal2").remove();
	var a = validateInput();
	var b = (document.getElementById("pass2").value) == (document.getElementById("pass1").value);

	if( a==true && b==true ){
		
		var m1 = $("<div class='modal fade' id='myModal2' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' data-keyboard='false' data-backdrop='static'></div>");
		var m2 = $("<div class='modal-dialog' role='document'></div>");
		var m3 = $("<div class='modal-content'></div>");
		var m4 = $("<div class='modal-body text-center'><h4 style='font-size: 1.2em;'><i class='glyphicon glyphicon-ok'></i> ¡Registrado con &eacute;xito! </h4></div>");
		var m5 = $("<div class='modal-footer' style='background-color: #ffffff;'></div>");
		var m6 = $("<button type='button' class='btn btn-primary' data-dismiss='modal'>Cerrar</button></div>");

		m6.appendTo(m5);
		m4.appendTo(m3);
		m5.appendTo(m3);
		m3.appendTo(m2);
		m2.appendTo(m1);

		$("#modalExito").append(m1);

		$("#texto").val("");
		$("#pass1").val("");
		$("#pass2").val("");
		$("#iconotexto").remove();
		$("#iconotexto2").remove();

	}
	else{
		var m1 = $("<div class='modal fade' id='myModal2' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' data-keyboard='false' data-backdrop='static'></div>");
		var m2 = $("<div class='modal-dialog' role='document'></div>");
		var m3 = $("<div class='modal-content'></div>");
		var m4 = $("<div class='modal-body text-center'><h4 style='font-size: 1.2em;'><i class='glyphicon glyphicon-remove'></i>  ¡Usuario inv&aacute;lido! <br><br> Por favor, intente de nuevo. </h4></div>");
		var m5 = $("<div class='modal-footer' style='background-color: #ffffff;'></div>");
		var m6 = $("<button type='button' class='btn btn-primary' data-dismiss='modal'>Cerrar</button></div>");

		m6.appendTo(m5);
		m4.appendTo(m3);
		m5.appendTo(m3);
		m3.appendTo(m2);
		m2.appendTo(m1);

		$("#modalFail").append(m1);

		$("#texto").val("");
		$("#pass1").val("");
		$("#pass2").val("");
		$("#iconotexto").remove();
		$("#iconotexto2").remove();
	}
	//  Ya sea que se ingrese con exito o no, despues se habilita el Login
	habilitarLogin();
}

