const array = ["Android", "iOS", "Architecture", "Teach", "Run"]

const funct1 = (name) => {
  let chosenString = "Tryber x aqui!";
  let splitedString = chosenString.split(' ');

  for (let i = 0; i < splitedString.length; i += 1){
    if (splitedString[i] === 'x'){
      splitedString[i] = name;
    }
  }
  return splitedString.join(' ');
}

const funct2 = (string) => {
  let result;
  result = `${string}
  Minhas cinco principais habilidades são:
  . ${array[0]}
  . ${array[1]}
  . ${array[2]}
  . ${array[3]}
  . ${array[4]}`;

  return result;
}

console.log(funct2(funct1("Jederson")));