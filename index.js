document.addEventListener('DOMContentLoaded', function () {

    //Credenciales correctas
    const usuarioCorrecto = "juanito123";
    const contraseñaCorrecta = "abc123";

    //Elementos del HTML
    const usuarioInput = document.getElementById('usuario');
    const pswInput = document.getElementById('psw');

    const btnLogin = document.getElementById('btnLogin');

    const errorUsuario = document.getElementById('errorUsuario');
    const errorPsw = document.getElementById('errorPsw');


    //Iniciar sesión
    btnLogin.addEventListener('click', function () {

        //Limpiar errores anteriores
        errorUsuario.textContent = "";
        errorPsw.textContent = "";

        usuarioInput.classList.remove('inputError');
        pswInput.classList.remove('inputError');

        //Validar usuario vacío
        if(usuarioInput.value === "") {
            errorUsuario.textContent = "! Ingresa tu cuenta de usuario";
            usuarioInput.classList.add('inputError');
        }

        //Validar contraseña vacía
        if(pswInput.value === "") {
            errorPsw.textContent = "! Ingresa tu contraseña";
            pswInput.classList.add('inputError');
        }

        //Si alguno está vacío, detener la ejecución
        if(usuarioInput.value === "" || pswInput.value === "") {
            return;
        }

        //Validar credenciales
        if(
            usuarioInput.value !== usuarioCorrecto ||
            pswInput.value !== contraseñaCorrecta
        ) {
            errorUsuario.textContent = "! Usuario o contraseña incorrectos";
            errorPsw.textContent = "! Usuario o contraseña incorrectos";

            usuarioInput.classList.add('inputError');
            pswInput.classList.add('inputError');
        }
        //Si las credenciales son correctas:
        //No hacemos nada y permanecemos en la misma pantalla.
    });

    //Recuperar contraseña
    const olvide = document.getElementById('olvide');
    const ventanaRecuperar = document.getElementById('ventanaRecuperar');

    const btnCerrar = document.getElementById('btnCerrar');
    const btnRestablecer = document.getElementById('btnRestablecer');

    //Abrir ventana
    olvide.addEventListener('click', function (event) {
        event.preventDefault();
        ventanaRecuperar.style.display = 'flex';
    });

    //Cerrar ventana
    btnCerrar.addEventListener('click', function () {
        ventanaRecuperar.style.display = 'none';
    });

    //Botón restablecer contraseña
    btnRestablecer.addEventListener('click', function () {
        alert("Se ha enviado un enlace para restablecer la contraseña.");
    });

});