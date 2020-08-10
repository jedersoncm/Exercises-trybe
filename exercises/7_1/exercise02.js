let longestWord = text => {
  let array = text.split(' ');
  let max = 0;
  let result = '';
  console.log(array.length);
  
  for (let i = 0; i < array.length; i += 1) {
    let currentSize = array[i].length;
    if (currentSize > max) {
      max = currentSize;
      result = array[i];
    }
  }
  return result;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
//console.log("AAAAAAAAAAA");

// const longestWord = text => {
//   let wordArray = text.split(' ')
//   let maxLength = 0
//   let result = ''

//   for (const word of wordArray) {
//       if (word.length > maxLength) {
//           maxLength = word.length
//           result = word
//       }
//   }

//   return result
// }

// console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))