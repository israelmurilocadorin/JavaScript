var peso, altura, imc;

peso = Number(prompt(" Digite seu peso: "));
altura = Number(prompt(" Digite sua altura: "));

imc = (peso/(altura * altura));

alert("seu imc é:"+imc);