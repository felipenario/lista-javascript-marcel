function calculoVetor() {

    let array = [];

    function pegarNumeroAleatorio(min, max) {
        return Math.random() * (max - min) + min;
    }

    for (i = 0; i < 50; i++) {
        array.push(pegarNumeroAleatorio(0, 50));
    }

    console.log(array);
}