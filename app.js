let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarintento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
   
             
   // el ususario no acerto
        if (numeroDeUsuario === numeroSecreto) {
            asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ?  'vez' : 'veces'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');

        } else {
            if (numeroDeUsuario > numeroDeUsuario) {
                asignarTextoElemento('p', 'El numero secreto es menor');
            } else {
                asignarTextoElemento('p', 'El numero secreto es mayor');
            }
            intentos++;
            limpiarcaja();
        }
    return;
}
function Condicionesiniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos = 1;
}

function limpiarcaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}
function generarNumeroSecreto() {
      let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

      console.log(numeroGenerado);
      console.log(listaNumerosSorteados);
      //Si ya sorteamos todos los numeros
      if (listaNumerosSorteados.length == numeroMaximo) {

      } else {

      //Si el numero generado esta incluida en la lista
      if (listaNumerosSorteados.includes(numeroGenerado)) {
          return generarNumeroSecreto();
      } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
     }
    }
}
function reiniciarJuego() {
    //limpiar caja
    limpiarcaja();
    //indicar mensaje intervalo de numeros
    Condicionesiniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}


Condicionesiniciales();
