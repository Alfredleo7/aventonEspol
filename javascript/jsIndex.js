$( document ).ready(function(){
	
});

function validarLogin() {
	var $user = $("#exampleInputUser").val();
	var $usuarioValido = 'user';

	if ($user==$usuarioValido){
		$(".form-ingreso").attr("action","inicio.html");
		$(".form-ingreso").attr("method","post");
		console.log($user);
	}
	else{
		$(".form-ingreso").attr("action","index.html");
		alert("Usuario incorrecto papuh :v");
		$("#exampleInputUser").val("");
		$("#exampleInputPassword").val("");
	}
}