function correcaoExercicio() {
    let numero = parseInt(document.querySelector("#numero").value);

    let nota50 = Math.trunc(numero / 50);
    numero = numero % 50;

    let nota10 = Math.trunc(numero / 10);
    numero = numero % 10;

    let nota5 = Math.trunc(numero / 5);
    numero = numero % 5;

    console.log("Notas 50: " + nota50);
    console.log("Notas 10: " + nota10);
    console.log("Notas 5: " + nota5);
    console.log("Notas 1: " + nota1);
}