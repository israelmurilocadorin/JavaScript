var a, b, c, delta, raiz_delta, x1, x2;

a = Number(prompt("Digite um número"));
b = Number(prompt("Digite um número"));
c = Number(prompt("Digite um número"));

delta = ((b**2) - 4 *a*c);

console.log(delta);

if (delta < 0) {
console.log("Não existe solução nos reais");
}
else {
raiz_delta = Math.sqrt(delta);
x1 = ((-b + raiz_delta) / 2*a);
x2 = ((-b - raiz_delta) / 2*a);
console.log("x1="+x1);
console.log("x2="+x2);
}
