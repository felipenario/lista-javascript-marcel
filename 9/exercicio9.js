function calculoVirgula() {

    var inputValores = document.querySelector("#numero");

    var resultado = document.querySelector("#resultado");

    var valores = inputValores.value;

    var vetorValores = valores.split(",");



    function checarParImpar(elemento) {

        if (elemento % 2 == 0) {
            console.log(elemento + " é par");
        } else {

            console.log(elemento + " é ímpar");

        }

    }

    vetorValores.forEach(checarParImpar);

}