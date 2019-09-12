function calculoVirgula() {

    var inputValores = document.querySelector("#numero");

    var resultado = document.querySelector("#resultado");

    var valores = inputValores.value;

    var vetorValores = valores.split(",");

    var soma = 0;

    var media = 0;

    var conversaoVetor = vetorValores.map(function(x) {
        return parseInt(x, 10);
    });


    for (i = 0; i < conversaoVetor.length; i++) {
        soma = soma + conversaoVetor[i];
        media = soma / conversaoVetor.length;

    }


    console.log("Média: " + media);
    resultado.innerHTML = media;


}