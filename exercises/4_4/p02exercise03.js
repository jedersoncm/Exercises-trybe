function menorValor (numbers) {
  let menor = numbers[0];
  let result = 0;

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < menor) {
      menor = numbers[i];
      result = i;
    }
  } 

  return (result);
}

teste = [2, 4, 6, 7, 10, 0, -3];
console.log(menorValor(teste));