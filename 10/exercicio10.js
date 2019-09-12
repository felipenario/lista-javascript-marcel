function calculoVirgula() {

    var inputValores = document.querySelector("#numero");

    var resultado = document.querySelector("resultado");

    var valores = inputValores.value;

    var vetorValores = valores.split(",");

    var maior = 0;

    var menor = 0;

    var conversaoVetor = vetorValores.map(function(x) {
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