var x1, x2, x3, maior;

x1 = Number(prompt(" Digite o primeiro n�mero "));
x2 = Number(prompt(" Digite o segundo n�mero "));
x3 = Number(prompt(" Digite o terceiro n�mero "));

if(x1 > x2 && x1 > x3){
 alert(" O maior n�mero �: "+x1);
}
else if(x2 > x1 && x2 > x3){
 alert(" O maior n�mero �: "+x2);
}
else if(x3 > x1 && x3 > x2){
 alert(" O maior n�mero �: "+x3);
}