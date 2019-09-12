function calculoVirgula() {

    var inputValores = document.querySelector("#numero");

    var resultado = document.querySelector("#resultado");

    var resultado2 = document.querySelector("#resultado2");

    var valores = inputValores.value;

    var vetorValores = valores.split(",");

    var conversaoVetor = vetorValores.map(function(x) {
        return parseInt(x, 10);
    });

    var vetorInvertido = vetorValores.reverse();

    console.log("Original: " + valores);
    console.log("Invertido: " + vetorInvertido);
    for (i = 0; i < valores.length; i++) {

        resultado.innerHTML += valores[i];

    }

    for (i = 0; i < vetorValores.length; i++) {

        resultado2.innerHTML += vetorInvertido[i];
    }

}