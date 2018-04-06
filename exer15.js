var minutos, segundos, horas, restoHoras, s;

{
	segundos = Number(prompt("Informe a quantidade de segundos: "));
	horas = segundos / 3600;
	restoHoras = segundos % 3600;
	minutos = restoHoras / 60;
	s = restoHoras % 60;
	console.log (Math.trunc(horas) + "h" + Math.trunc(minutos) + "m" + s +
	"s");
}