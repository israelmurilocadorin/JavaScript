var a, b, c;

a = Number(prompt(" Digite o valor de a: "));
b = Number(prompt(" Digite o valor de b: "));
c = Number(prompt(" Digite o valor de c: "));

if(a == b && b == c && c == a){
 alert("Equil�tero");
}
else if(a == b || b == c || c == a){
 alert("Is�sceles");
}
else if(a != b && b != c && c != a){
 alert("Escaleno");
}