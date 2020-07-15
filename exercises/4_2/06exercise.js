let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 != 0) {
    total++;
  }
}

if (total == 0) {
  console.log("Nenhum valor impar encontrado")
}
else {
  console.log(total);
}
