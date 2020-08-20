    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, curr) => {
    let count = 0;
    curr.split('').forEach(letter => {
      if (letter === 'A' || letter === 'a'){
        count += 1;
      }
    });
    return  acc + count;
  }, 0);
}

assert.deepEqual(containsA(), 20);