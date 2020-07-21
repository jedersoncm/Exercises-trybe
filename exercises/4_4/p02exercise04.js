function maiorNome (nomes) {
  let maior = nomes[0];
  

  for (let i = 1; i < nomes.length; i++) {
    if (nomes[i].length > maior.length) {
      maior = nomes[i];
    }
  }

  return (maior);
}

teste =  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(maiorNome(teste));