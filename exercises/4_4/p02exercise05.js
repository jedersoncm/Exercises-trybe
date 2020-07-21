function maisRepete (numbers) {
  
  let result = numbers[0];
  let rep = 0;
  let repMaior = 0;

  for (let i = 0; i < numbers.length - 1; i += 1) {
    rep = 0;
    for (let j = 0 ; j < numbers.length - 1; j += 1){
      
      if (numbers[i] === numbers[j]){
        rep += 1;
      }
    }
    
    if (rep > repMaior) {
      repMaior = rep;
      result = numbers[i];
    }
} 

  return (result);
}

teste = [2, 3, 2, 5, 8, 2, 3];
console.log(maisRepete(teste));