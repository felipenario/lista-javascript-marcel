function testeOperadores(){

	let contaa = 6*3+2;
	let contab = 16*'3'+1;
	let contac = 16*('3'+1);
	let contad = '20'+(3+'1');
	let contae = -2+4/2-7*2;
	let contaf = -2+4/(2-7)*2;
	let contag = "-2"+4/(2-7)*"2";
	let contah = 6*3+"2";
	let contai = 6*3/"2";
	let contaj = 6*3+"2" < 10;
	let contak = 6*"4"-24 == false;
	let contal = 4*"5"-20 == true;

	let a = document.querySelector('#a');
	let b = document.querySelector('#b');
	let c = document.querySelector('#c');
	let d = document.querySelector('#d');
	let e = document.querySelector('#e');
	let f = document.querySelector('#f');
	let g = document.querySelector('#g');
	let h = document.querySelector('#h');
	let i = document.querySelector('#i');
	let j = document.querySelector('#j');
	let k = document.querySelector('#k');
	let l = document.querySelector('#l');

	
	a.innerHTML = contaa;
	b.innerHTML = contab;
	c.innerHTML = contac;
	d.innerHTML = contad;
	e.innerHTML = contae;
	f.innerHTML = contaf;
	g.innerHTML = contag;
	h.innerHTML = contah;
	i.innerHTML = contai;
	j.innerHTML = contaj;
	k.innerHTML = contak;
	l.innerHTML = contal;


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