var salarioFixo, comix, montante, salarioFinal;

salarioFixo = Number(prompt(" Digite o salario fixo: "));
montante = Number(prompt(" Digite o valor do montante: "));

comix = (montante * 5) /100;
salarioFinal = salarioFixo + comix;

alert(" O salario final é: "+salarioFinal);
