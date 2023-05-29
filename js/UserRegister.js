const formulario = document.getElementById('form')

const inputs = document.querySelectorAll('#form input')

const expresiones = {
	usuario: /^[a-zA-Z0-9]{6,10}$/, 
	contraseña: /^.{6,10}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
	expresiones:false
}

const validarFormulario = (e) => {
	switch (e.target.name){
		case "user1":
			validarCampo(expresiones.usuario, e.target, 'Grupo1');
		break;
		case "pass1":
			validarCampo(expresiones.contraseña, e.target, 'Grupo2');
			validarPassword2();
		break;
		case "pass2":
			validarPassword2();
		break;
		case "email1":
			validarCampo(expresiones.correo, e.target, 'Grupo4');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`form_${campo}`).classList.remove('form_grupo1Incorrecto');
		document.getElementById(`form_${campo}`).classList.add('form_grupo1Correcto');
		document.querySelector(`#form_${campo} i`).classList.add('fa-circle-check');
		document.querySelector(`#form_${campo} i`).classList.remove('fa-circle-xmark');
		document.querySelector(`#form_${campo} .form_inputError`).classList.remove('form_inputError-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`form_${campo}`).classList.add('form_grupo1Incorrecto');
		document.getElementById(`form_${campo}`).classList.remove('form_grupo1Correcto');
		document.querySelector(`#form_${campo} i`).classList.add('fa-circle-xmark');
		document.querySelector(`#form_${campo} i`).classList.remove('fa-circle-check');		
		document.querySelector(`#form_${campo} .form_inputError`).classList.add('form_inputError-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () =>{
	const inputPass1 = document.getElementById('pass1');
	const inputPass2 = document.getElementById('pass2');

	if(inputPass1.value !== inputPass2.value){
		document.getElementById(`form_Grupo3`).classList.add('form_grupo1Incorrecto');
		document.getElementById(`form_Grupo3`).classList.remove('form_grupo1Correcto');
		document.querySelector(`#form_Grupo3 i`).classList.add('fa-circle-xmark');
		document.querySelector(`#form_Grupo3 i`).classList.remove('fa-circle-check');		
		document.querySelector(`#form_Grupo3 .form_inputError`).classList.add('form_inputError-activo');
		campos['pass1'] = false;
	} else {
		document.getElementById(`form_Grupo3`).classList.remove('form_grupo1Incorrecto');
		document.getElementById(`form_Grupo3`).classList.add('form_grupo1Correcto');
		document.querySelector(`#form_Grupo3 i`).classList.remove('fa-circle-xmark');
		document.querySelector(`#form_Grupo3 i`).classList.add('fa-circle-check');		
		document.querySelector(`#form_Grupo3 .form_inputError`).classList.remove('form_inputError-activo');
		campos['pass1'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit',(e) => {

	e.preventDefault();

	const terminos = document.getElementById('terminos');

	if(campos && terminos.checked){
		formulario.reset();	
		document.getElementById('form_exito1').classList.add('form_exito-activo');
		setTimeout(()=>{
			document.getElementById('form_exito1').classList.remove('form_exito-activo');
		}, 1000);
		document.querySelectorAll('.form_grupo1Correcto').forEach((icon)=>{
			icon.classList.remove('form_grupo1Correcto')
		});
	} else {
		document.getElementById('form_mensaje').classList.add('form_mensaje-activo');
		setTimeout(()=>{
			document.getElementById('form_mensaje').classList.remove('form_mensaje-activo');
		}, 1500);
	}
});