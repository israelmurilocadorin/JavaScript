var nome, matricula, horasTrabalhadas, valorHora, salarioBruto;

nome = prompt(" Digite seu nome: ");
matricula = Number(prompt(" Digite o número da matricula: "));
horasTrabalhadas = Number(prompt(" Digite as horas trabalhadas: "));
valorHora = Number(prompt(" Digite o valor da hora: "));
salarioBruto = horasTrabalhadas * valorHora;

alert(salarioBruto);