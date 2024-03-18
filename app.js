let divResultado = document.getElementById('campoResultado');
let divCampoEnBlanco = document.getElementById('campoEnBlanco');
divResultado.style.display = 'none';

function verificarTexto(){
    let textoEntrada = document.getElementById('textoEntrada').value;
    console.log(typeof(textoEntrada));
    if(typeof textoEntrada === 'string' && textoEntrada.length === 0){
        alert('Ingresa un mensaje valido para encriptarlo');
    }else{
        encriptar();
    }
}

function encriptar(){
    let textoEntrada = document.getElementById('textoEntrada').value;
    let textoEncriptado = textoEntrada.replaceAll('e','enter').replaceAll('i','imes').replaceAll('a','ai').replaceAll('o','ober').replaceAll('u','ufat');
    divCampoEnBlanco.style.display = 'none';
    divResultado.style.display = '';
    document.getElementById('textoResultado').textContent = textoEncriptado;
    document.querySelector('#textoEntrada').value = '';
}

function desencriptar(){
    let textoEntrada = document.getElementById('textoEntrada').value;
    let textoDesencriptardo = textoEntrada.replaceAll('enter','e').replaceAll('imes','i').replaceAll('ai','a').replaceAll('ober','o').replaceAll('ufat','u');
    divCampoEnBlanco.style.display = 'none';
    divResultado.style.display = '';
    document.getElementById('textoResultado').textContent = textoDesencriptardo;
    document.querySelector('#textoEntrada').value = '';
}

function copiarTexto(){
    let texto = document.getElementById('textoResultado').value;
    navigator.clipboard.writeText(texto)
    //al momento de copiar el texto quiero dejar el textarea en blanco y volver a poner el div
    divCampoEnBlanco.style.display = '';
    divResultado.style.display = 'none';
}

function restricciones(){
    return (event.charCode >= 97 && event.charCode <= 122);
}
/**
 * al iniciar la pagina ocultar div campoResultado
 *
 * 
 * crear funcion encriptacion
 * conectar funcion con boton
 * capturar el texto del campo
 * 
 * funcion encriptacion:
 * convierte la todas las a en "enter"
 * La letra "i" es convertida para "imes"
 * La letra "a" es convertida para "ai"
 * La letra "o" es convertida para "ober"
 * La letra "u" es convertida para "ufat"
 * 
 * Debe funcionar solo con letras minúsculas
 * No deben ser utilizados letras con acentos ni caracteres especiales
 * Debe ser posible convertir una palabra
 * para la versión encriptada también devolver una palabra encriptada para su versión original.
 * 
 */
