let n = 10;
let i;
let j;
let char = '*';
let space = ' ';
let line = '';

for (i = 1 ; i <= n ; i += 1) {
  line = '';
  for (j = 1 ; j <= n ; j += 1 ){
    if (j <= n - i){
      line += space;
    }
    else {
      line += char;
    }
  }
  console.log(line);
}
