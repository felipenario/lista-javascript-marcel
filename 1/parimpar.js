function parImpar(){

	let inputNumero = document.querySelector("#numero");
	let numero = parseInt(inputNumero.value);
	let resultado = document.querySelector('#resultado');
	if(numero %2  == 0) resultado.innerHTML = "é par";
	else resultado.innerHTML = "é impar";
}