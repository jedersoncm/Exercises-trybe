function somaAte (number) {
  if(number === 1) {
    return 1;
  } else {
    return number + somaAte(number -1);
  }
}

console.log(somaAte(5));