function calculoVirgula() {

    let inputValores = document.querySelector("#numero");

    let resultado = document.querySelector("resultado");

    let valores = inputValores.value;

    let vetorValores = valores.split(",");

    let maior = 0;

    let menor = 0;

    let conversaoVetor = vetorValores.map(function(x) {
        return parseInt(x, 10);
    });


    function checarParImpar(elemento, index) {
        if (index == 0) {
            maior = elemento;
            menor = elemento;

        }
        if (elemento > maior) {
            maior = elemento;
        } else if (elemento < menor) {
            menor = elemento;
        }
    }

    conversaoVetor.forEach(checarParImpar);



    console.log("Maior: " + maior);
    console.log("Menor: " + menor);


}