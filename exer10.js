var salarioAtual, salarioNovo, reajuste, valorExtra;

salarioAtual = Number(prompt(" Digite o seu salario: "));
reajuste = Number(prompt(" Digite o percentual de reajuste: "));

valorextra = (salarioatual * reajuste) /100;
salarionovo = (salarioatual + valorextra);

alert(" O valor do salario é:" +salarionovo);