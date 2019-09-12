function calculoCompra(){


	let inputNumero = document.querySelector("#numero");
	let qtd = parseFloat(inputNumero.value);
	let resultado = document.querySelector('#resultado');
	let valor = 0;
	
	if(qtd < 12){

		valor = qtd * 1.30;
	 
	}else if(qtd >= 12){

		valor = qtd * 1;

	}

	resultado.innerHTML = valor;


}