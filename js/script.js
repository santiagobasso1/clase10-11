//Ir descomentando las funciones para ver su funcionamiento
//El SCSS les subiremos un video de como instalarlo y usarlo para que les quede

//FILTER
//Filtra los elementos del array devolviendo los que cumplen con una condición (similar al find pero devuelve todos no solo el primero)
const arrayPalabra = ["socotroco", "saracatunga", "palabrita", "argentinos", "Uruguay", "no", "si"];
const resultadoFilter = arrayPalabra.filter(palabra => palabra.length > 7);
//console.log(resultadoFilter);

//MAP
//Hace algo con cada uno de los elementos del array
const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayNumerosx2 = arrayNumeros.map(function (x) {
    return x * 2;
})
//console.log(arrayNumerosx2)

//REDUCER
//Realizamos una función que realice la operación que queremos
const arrayForReducer = [1, 2, 3, 4, 5];

function reducer(accumulator, currentValue) {
    return accumulator - currentValue
}

const elementoResultadoReduser = arrayForReducer.reduce(reducer)
//console.log(elementoResultadoReduser)


//FIND
//Devuelve el primer valor que encuentra
const arrayNumerosFind = [5, 10, 99, 870, 55, 8];
const numeroMayorADiez = arrayNumerosFind.find(numero => numero > 10);
//console.log(numeroMayorADiez)

//SOME
//Devuelve si existe algun elemento que cumpla con lo que le ponemos de condición (BOOLEANO)
const arrayNumerosSome = [1, 2, 3, 4, 5, 6, 7, 8, 9, 389182, 11, 12, 13, 14];
//console.log(arrayNumerosSome.some(numero=>numero%15==0)) 

//EVERY
//Consulta lo mismo que arriba pero todos, si solo 1 no cumple ya da false ("Para todo x que cumple con la condición, siendo x cada item del array")
const arrayNumerosEvery = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(arrayNumerosEvery.every(numero=>numero<10))

//FUNCIONES ANONIMAS
const mensaje = "Funcion anonima y flecha son funciones también, igual que el function!";
const nombreFuncionAnonima = function (parametroFormal) {
    console.log(parametroFormal)
}
//nombreFuncionAnonima(mensaje)

//FUNCION FLECHA (Mi favorita)
const nombreFuncionAnonimaSinFuction = (parametroFormal) => {
    console.log(parametroFormal)
}
//nombreFuncionAnonimaSinFuction(mensaje)



const funcionAlertaMensaje = (mensaje) => {
    alert(mensaje)
}



//TIMEOUTS (De paso practicamos las funciones flecha)

const mostrarAlerta = () => {
    alert("ALERTA DESPUES DE LOS MS DEJADOS ARRIBA")
}

const funcionTimeout = () => {
    setTimeout(mostrarAlerta, 3000);
}

// funcionTimeout();

//SET INTERVAL
let contadorIntervalo = 0;
const codigoQueSeEjecutaConCadaVueltaDelIntervalo = () => {
    alert("VUELTA DEL INTERVALO NUMERO: " + (contadorIntervalo + 1));
    contadorIntervalo++;
    if (contadorIntervalo == 4) {
        clearInterval(intervalo) //DETIENE EL INTERVALO CUANDO EL CONTADOR LLEGA A 4
    }
}

//const intervalo = setInterval(codigoQueSeEjecutaConCadaVueltaDelIntervalo,2000)


//Practica en clase:
const rutaImagenes = ["./img/1.PNG", "./img/2.PNG"]
let imagenActual = 0;
const arrayColores = ["#918f8b", "#0a0a0a"]
function cambiarImagen() {
    if (imagenActual == 0) {
        imagenActual = 1;
    } else {
        imagenActual = 0;
    }
    const rutaimagenActual = rutaImagenes[imagenActual];
    document.getElementById("imagenIncreible").src = rutaimagenActual;
    document.body.style.backgroundColor = arrayColores[imagenActual]
}


//setInterval(cambiarImagen,2000)





