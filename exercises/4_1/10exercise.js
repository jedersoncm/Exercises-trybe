let custoProd = 2;
let valorVend = 3.4;
let lucro = 0;

if (custoProd >= 0 || valorVend > 0){
  lucro  = (valorVend - (custoProd * 1.2)) * 1000;
  console.log(lucro);
}
else {
  console.log("ERRO! Valores incorretos.")
}