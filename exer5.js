var a, b , c, x1, x2, delta, raizDelta;
  
a = Number(prompt(" Digite o valor de a: "));
b = Number(prompt(" Digite o valor de b: "));
c = Number(prompt(" Digite o valor de c: "));

delta = (( b ** b) -4 *a *c);
alert(delta);

if (delta < 0){
  alert(" Não existe solução ");
}
else{
  raizDelta = math.sqrt(delta);

  alert(raizDelta);
  x1 = (( -b +raizDelta )/2 *a);
  x2 = (( -b -raizDelta )/2 *a);
  alert(" Valor de x1:\n"+x1);
  alert(" Valor de x2:\n"+x2);
}