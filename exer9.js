var x1, x2, x3, maior;

x1 = Number(prompt(" Digite o primeiro número "));
x2 = Number(prompt(" Digite o segundo número "));
x3 = Number(prompt(" Digite o terceiro número "));

if(x1 > x2 && x1 > x3){
 alert(" O maior número é: "+x1);
}
else if(x2 > x1 && x2 > x3){
 alert(" O maior número é: "+x2);
}
else if(x3 > x1 && x3 > x2){
 alert(" O maior número é: "+x3);
}