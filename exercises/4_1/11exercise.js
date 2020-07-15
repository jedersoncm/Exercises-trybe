let salBruto = 3000;
let aliqINSS;
let aliqIR;
let salBase;
let salLiquido;

if (salBruto <= 1556.94) {
  aliqINSS = salBruto * 0.08;
}
else if (salBruto <= 2594.92) {
  aliqINSS = salBruto * 0.09;
}
else if (salBruto <= 5189.82) {
  aliqINSS = salBruto * 0.11;
}
else {
  aliqINSS = 570.88;
}

salBase = salBruto - aliqINSS;

if (salBase <= 1903.98) {
  aliqIR = 0;
}
else if (salBase <= 2826.65) {
  aliqIR = (salBase * 0.075) - 142.8;
}
else if (salBase <= 3751.05) {
  aliqIR = (salBase * 0.15) - 354.8;
}
else if (salBase <= 4664.68) {
  aliqIR = (salBase * 0.225) - 636.13;
}
else {
  aliqIR = (salBase * 0.275) - 869.36;
}

salLiquido = salBase - aliqIR;
 console.log("Salário liquido: " , salLiquido);
