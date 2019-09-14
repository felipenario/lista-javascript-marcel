function calculoVirgula() {

    let inputValores = document.querySelector("#numero");

    let resultado = document.querySelector("#resultado");

    let resultado2 = document.querySelector("#resultado2");

    let valores = inputValores.value;

    let vetorValores = valores.split(",");

    let conversaoVetor = vetorValores.map(function(x) {
        return parseInt(x, 10);
    });

    let vetorInvertido = vetorValores.reverse();

    console.log("Original: " + valores);
    console.log("Invertido: " + vetorInvertido);
    for (i = 0; i < valores.length; i++) {

        resultado.innerHTML += valores[i];

    }

    for (i = 0; i < vetorValores.length; i++) {

        resultado2.innerHTML += vetorInvertido[i];
    }

}