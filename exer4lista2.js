var x;

x = prompt("Digite a letra correspondente: \nE Excelente \nV Muito Bom
\nG Bom \nA Razoável \nF Reprovado\n").toUpperCase()
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
 alert("Razoável");
}
else if(x == F){
 alert("Reprovado");
}