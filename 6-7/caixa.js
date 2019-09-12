function calculoNotas(){


	let inputValor = document.querySelector("#valor");
	let valor = parseInt(inputValor.value);
	let notasDe50 = 0;
	let notasDe10 = 0;
	let notasDe5 = 0;
	let notasDe1 = 0;
	let resultado50 = document.querySelector('#notasDe50');
	let resultado10 = document.querySelector('#notasDe10');
	let resultado5 = document.querySelector('#notasDe5');
	let resultado1 = document.querySelector('#notasDe1');
	
	while(valor >= 50){

		valor = valor - 50;
		notasDe50 = notasDe50 + 1;
	 
	}

	while(valor >= 10){

		valor = valor - 10;
		notasDe10 = notasDe10 + 1;
	 
	}

		while(valor >= 5){

		valor = valor - 5;
		notasDe5 = notasDe5 + 1;
	 
	}

		while(valor == 1){

		valor = valor - 1;
		notasDe1 = notasDe1 + 1;
	 
	}

	resultado50.innerHTML = notasDe50;
	resultado10.innerHTML = notasDe10;
	resultado5.innerHTML = notasDe5;
	resultado1.innerHTML = notasDe1;


}



/*   

jornada semanal = 40 hrs.

SE 
jornada > 40hrs 
ENTAO
salario = valorhora + 50% de valorhora.

entrada de dados: numero de horas, salario p/ hora
saida de dados: salario total(com o valor da hora extra caso exista)




 */