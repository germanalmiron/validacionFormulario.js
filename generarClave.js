//Declaración de variables.

var frmClave = document.querySelector("#frmClave");
var nombre = document.querySelector("#nombre");
var apellido = document.querySelector("#apellido");
var dni = document.querySelector("#dni");
var fecha = document.querySelector("#fecha");
var btnenviar = document.querySelector("#btnenviar");
var respuesta = document.querySelector("#respuesta");

function generarClave(evento) 
{

//Especificación de clave///

var clave = nombre.value.substring(0,3);
clave += apellido.value.substring(0,2);
clave += dni.value;
clave += fecha.value.substring(8);
clave += fecha.value.substring(3,5);
clave += fecha.value.substring(0,2)

respuesta.innerHTML = "TÚ CLAVE ES: "+clave.toUpperCase();
    evento.preventDefault();
    alert ("Enviando formulario")
}

function validacionCampos(evento) {
    
    var expRegNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var expRegDni = /^\d{8}(?:[-\s]\d{4})?$/;
    var expRegFecha = /^([0-2][0-9]|3[0-1])()(0[1-9]|1[0-2])\2(\d{4})+$/;  

    var quedato = evento.target;
        //validaCampo = true,
        //color;
    

    if(quedato.id == 'nombre' || quedato.id == 'apellido'){

        if(!expRegNombre.exec(quedato.value))
           {
            alert('Solo puede ingresar, letras y espacio')
            //validaCampo = false;
            //quedato.focus();
            setTimeout(function(){
                quedato.focus();
            },100);
         }
    }

    if(quedato.id == 'dni'){

        if(!expRegDni.exec(quedato.value))
           {
            alert('Solo puede ingresar ocho dígitos numéricos');
            // quedato.focus();
            setTimeout(function(){
                quedato.focus();
            },100);
         }
    }

    if(quedato.id == 'fecha'){

        if(!expRegFecha.exec(quedato.value))
           {
            alert('Ingresar dd-mm-aa');
            // quedato.focus();
            setTimeout(function(){
                quedato.focus();
            },100); 
         }
    }

    //color = (validaCampo)?"green":"red";
    //quedato.style.outline = "thin solid" +color;

}

function cargaDocumento() {

    frmClave.addEventListener("submit", generarClave);
    nombre.addEventListener("blur", validacionCampos);
    apellido.addEventListener("blur", validacionCampos);
    dni.addEventListener("blur", validacionCampos);
    fecha.addEventListener("blur", validacionCampos);
}

//Delegación-asignación de Eventos

window.addEventListener("load", cargaDocumento);