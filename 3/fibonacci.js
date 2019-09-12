function calculoFibonacci(){


	let inputNumero = document.querySelector("#numero");
	let numero = parseInt(inputNumero.value);
	let x = 0;
	let y = 1;
	let z = 0;
	let resultado = document.querySelector('#resultado');
	while(numero >= 0){

		z = x + y;
        x = y;
        y = z;
		numero--;
	 
	}

	resultado.innerHTML = x;


}