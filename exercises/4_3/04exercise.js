let n = 10;
let mod = n % 2;
let i;
let j;
let char = '*';
let space = ' ';
let line = '';

for (i = 1 ; i <= n / 2 + mod ; i += 1) {
  line = '';
  for (j = 1 ; j <= n / 2 + i ; j += 1 ){
    if (j <= n / 2 + mod - i){
      line += space;
    }
    else {
      line += char;
    }
  }
  console.log(line);
}
