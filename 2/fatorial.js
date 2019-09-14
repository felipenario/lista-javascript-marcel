function calculoFatorial() {


    let inputNumero = document.querySelector("#numero");
    let numero = parseInt(inputNumero.value);
    let resultado = document.querySelector('#resultado');
    for (fatorial = 1; numero > 1; numero = numero - 1) {

        fatorial = fatorial * numero;


    }

    resultado.innerHTML = fatorial;


}