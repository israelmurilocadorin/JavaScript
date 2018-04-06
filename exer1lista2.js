var a, b, c;

a = Number(prompt(" Digite o valor de a: "));
b = Number(prompt(" Digite o valor de b: "));
c = Number(prompt(" Digite o valor de c: "));

if(a == b && b == c && c == a){
 alert("Equilátero");
}
else if(a == b || b == c || c == a){
 alert("Isósceles");
}
else if(a != b && b != c && c != a){
 alert("Escaleno");
}