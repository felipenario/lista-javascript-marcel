function calculoVirgula() {

    let inputValores = document.querySelector("#numero");

    let resultado = document.querySelector("#resultado");

    let valores = inputValores.value;

    let vetorValores = valores.split(",");



    function checarParImpar(elemento) {

        if (elemento % 2 == 0) {
            console.log(elemento + " é par");
        } else {

            console.log(elemento + " é ímpar");

        }

    }

    /* checagem por filter
    let vetorPar = vetorValores.filter(elemento => elemento % 2 == 0);
    let vetorImpar = vetorValores.filter(elemento => elemento % 2 != 0);
    console.log("Par: " + vetorPar);
    console.log("Impar: " + vetorImpar);
     
     */

    vetorValores.forEach(checarParImpar);

}