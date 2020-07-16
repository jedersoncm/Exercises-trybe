function verificar(word, ending) {

  for (let i = 1 ; i <= ending.length ; i += 1) {
    if (word[word.length - i] !== ending[ending.length - i]){
      return false;
    }
  }
  return true;
}

console.log(verificar("trybe", "be"));