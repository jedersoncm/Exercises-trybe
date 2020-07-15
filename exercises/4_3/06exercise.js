let n = 2;
let i;
let div = 0;

if (n === 1) {
  div = 1;
}
if (n === 2) {
  div = 0;
}
else if (n % 2 === 0) {
  console.log(n + " não é primo.");
}
else {
  for (i = 3 ; i < n && div == 0 ; i += 1){
    if (n % i === 0) {
      div += 1;
    }
  }
}
if (div === 0) {
  console.log(n + " é primo.");
}
else {
  console.log(n + " não é primo.");
}