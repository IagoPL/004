function calcularBitParidad() {

    //Entrada datos
    var input = document.getElementById("primerNumeroBinario").value;
    var input_2 = document.getElementById("segundoNumeroBinario").value;
    var array = [];
    var resultado;

    if (input.length == 0) {
        alert("Llena la casilla");
    }

    for (var i = 0; i < input.length; i++) {
        array[i] = input.charAt(i);
    }

    if (array.length % 2 == 0) {
        resultado = 1;
    } else {
        resultado = 0
    }

    console.log(array);

    //Salida
    document.getElementById("salida").innerHTML = resultado;
}

function calcularComplementoAUno() {
    //Entrada datos
    var input = document.getElementById("primerNumeroBinario").value;
    var array = [];
    var array_2 = [];

    if (input.length == 0) {
        alert("¡Debes introducir un número!");
    }

    for (var i = 0; i < input.length; i++) {
        array[i] = input.charAt(i);
    }

    console.log(array);

    for (var i = 0; i < input.length; i++) {
        if (array[i] == 1) {
            array_2[i] = 0;
        } else {
            array_2[i] = 1;
        }
    }



    console.log(array);

    console.log(array_2);

    //Salida
    document.getElementById("salida").innerHTML = array_2;

}