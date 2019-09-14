function calculoVirgula() {

    let inputValores = document.querySelector("#numero");

    let resultado = document.querySelector("#resultado");

    let valores = inputValores.value;

    let vetorValores = valores.split(",");

    let soma = 0;

    let media = 0;

    let conversaoVetor = vetorValores.map(function(x) {
        return parseInt(x, 10);
    });


    for (i = 0; i < conversaoVetor.length; i++) {
        soma = soma + conversaoVetor[i];
        media = soma / conversaoVetor.length;

    }


    console.log("Média: " + media);
    resultado.innerHTML = media;


}