let n = 9;
let i;
let j;
let middle = parseInt(n / 2) + 1;
let char = '*';
let space = ' ';
let line = '';

for (i = 1 ; i <= middle -1 ; i += 1) {
  line = '';
  for (j = 1 ; j <= n / 2 + i ; j += 1 ){
    if (j <= middle - i){
      line += space;
    }
    else if (j == (middle + 1 - i) || j == (middle -1 + i)) {
      line += char;
    }
    else if (j > (middle + 1 - i) && j < (middle -1 + i)) {
      line += space;
    }
  }
  console.log(line);
}
line = '';
for (i = 1 ; i <= n ; i += 1){
  line += char;
}
console.log(line);

