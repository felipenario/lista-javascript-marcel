function calculoSalario() {


    let inputHoras = document.querySelector("#horas");
    let inputSalario = document.querySelector("#salario");
    let horas = parseFloat(inputHoras.value);
    let salarioHora = parseFloat(inputSalario.value);
    let resultado = document.querySelector('#resultado');
    let salarioFinal = 0;
    let horaExtra = 0.5;
    let calculoHora = 0;
    let salarioTemp = horas * salarioHora;

    if (horas > 40) {
        calculoHora = horaExtra * salarioHora;
        salarioFinal = salarioTemp + calculoHora;

    } else if (horas < 40) {

        salarioFinal = salarioTemp;

    }

    resultado.innerHTML = salarioFinal;


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