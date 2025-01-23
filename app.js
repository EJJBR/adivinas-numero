//Definir variables
let numeroSecreto;
let intentos;
let palabraIntento;
let listaNumerosSorteados=[];
let numeroMaximo=10;
//Funcion para comparar el numero ingresado por el ususario con el numero secreto para ver si gana o pierde el intento
function verificarIntento() {
    //definir valrialbes locales
    let numeroUsuario=parseInt(document.getElementById("numeroUsuario").value);
    console.log(intentos);//Testeo del numero de intetos
    //Comprar el numero des usuario con el numero secreto
    if (numeroSecreto==numeroUsuario) {
        //Acerto, gano, evualemos los intentos
        if (intentos!=1) {palabraIntento="intentos."};
        asignarTextoElemeno("p","Acertastes el numero. Solo te tomo "+intentos+" "+palabraIntento);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        //Fallo el intento, se procede a dar pistas y aumentar el contador de intentos
        intentos++;
        if (numeroUsuario>numeroSecreto) {
            asignarTextoElemeno("p","El numero secreto es menor.");
        }else{
            asignarTextoElemeno("p","El numero secreto es mayor.");
        }
        //Limpiando la caja de texto cada vez que el usuario falle el intento
        limpiarTxt();
    }
}
function condicionesIniciales(){
    asignarTextoElemeno("h1","Juego del numero secreto!");
    asignarTextoElemeno("p","Pon un numero del 1 al "+numeroMaximo+" para intentar adivinar adivinar.");
    numeroSecreto=generarNumeroAleatorio();
    intentos=1;
    palabraIntento="intento."
    console.log(numeroSecreto);//Testeo de la correta eleccion del numero secreto
}
function empezarNuevoJuego() {
    //Funcion para empezar nuevo juego
    //Limpiar caja
    limpiarTxt();
    //Indicar mensaje de intervalo de numeros, Generar numero aleatorio y Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.getElementById("reiniciar").setAttribute("disabled",true);
}
function limpiarTxt() {
    //Buscando la caja de texto por id y vaciandola
    document.querySelector('#numeroUsuario').value="";
}
function asignarTextoElemeno(elemento, texto) {
    //Funcion para asignar texto de manera dinamica
    let elemtnoHTML = document.querySelector(elemento);//Selecciona elemento
    elemtnoHTML.innerHTML = texto;//Escribe texto en el elemento encontrado
}
function generarNumeroAleatorio(){
    //Funcion para generar un numero caulqueira del 1 al 10
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo+1);
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length==numeroMaximo) {
        asignarTextoElemeno("p","Ya se asignaron todos los numeros posibles.");
    }else{
        //Si el numero generado esta en la lista entonces
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        //alert("Este numero ya salio, no saldra de nuevo {"+numeroGenerado+"}");
        return generarNumeroAleatorio();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
    
}
condicionesIniciales();