function maiorValor (numbers) {
  let maior = numbers[0];
  let result = 0;

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maior) {
      maior = numbers[i];
      result = i;
    }
  }

  return (result);
}

teste = [2, 3, 6, 7, 10, 1];
console.log(maiorValor(teste));