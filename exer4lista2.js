var x;

x = prompt("Digite a letra correspondente: \nE Excelente \nV Muito Bom
\nG Bom \nA Razo�vel \nF Reprovado\n").toUpperCase()
console.log(x);

if(x == E){
 alert("Excelente");
}
else if(x == V){
 alert("Muito Bom");
}
else if(x == G){
 alert("Bom");
}
else if(x == A){
 alert("Razo�vel");
}
else if(x == F){
 alert("Reprovado");
}