function calculoSalario(){


	let inputSalarioBruto = document.querySelector("#salarioBruto");
	let inputHorasTrabalhadas = document.querySelector("#salarioBruto");
	let salarioBruto = parseFloat(inputSalarioBruto.value);
	let horasTrabalhadas = parseInt(inputHorasTrabalhadas.value);
	let resultado = document.querySelector('#salarioLiquido');
	let salarioLiquido = 0;
	let salarioLiquidoExtra = 0;
	let impostoRenda = 0;
	let encargos = 0;
	let calculoSalario = 0;
	let valorHoraExtra = 0;
	let calculoHora1 = 0;
	let calculoHora2 = 0;
	let horaExtraRecebida = 0;
	let qtdHorasExtras = 0;

	
	if(salarioBruto < 800){

		salarioLiquido = salarioBruto;

	}
	
	if (salarioBruto >= 800 && salarioBruto <= 1.600) {

		impostoRenda = 8/100;
		encargos = 5/100;
		calculoSalario = impostoRenda + encargos * salarioBruto;
		salarioLiquido = salarioBruto + calculoSalario;

	}

	if (salarioBruto > 1.600) {

		impostoRenda = 15/100;
		encargos = 7/100;
		calculoSalario = impostoRenda + encargos * salarioBruto;
		salarioLiquido = salarioBruto + calculoSalario;

	}

	if(horasTrabalhadas > 160){

		calculoHora1 = salarioBruto/horasTrabalhadas;
		calculoHora2 = calculoHora1 * 50/100;
		valorHoraExtra = calculoHora1 + calculoHora2;
		qtdHorasExtras = horasTrabalhadas - 160;
		horaExtraRecebida = qtdHorasExtras * valorHoraExtra;
		salarioLiquidoExtra = salarioLiquido + horaExtraRecebida;
		resultado.innerHTML = salarioLiquidoExtra;

	}else if (horasTrabalhadas <= 160) {

		resultado.innerHTML = salarioLiquido;

	}



}



/*   

SE 
Salario Bruto < 800 
ENTAO 
Nenhum desconto

SE
Salario Bruto >= 800 && Salario Bruto <= 1.600
ENTAO
Descontar 8% de imposto de renda e 5% de encargos


Se
Salario Bruto > 1.600
ENTAO
Descontar 15% de imposto de renda e 7% de encargos

SE
HorasMês > 160
ENTAO
Salario bruto/160 e 50% nas horas que excederam a 160.



 */