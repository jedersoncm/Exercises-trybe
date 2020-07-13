let peca = "RainHa".toUpperCase()

switch (peca) {
  case "PEÃO":
    console.log("Uma casa pra frente");
    break;
  case "TORRE":
    console.log("Horizontal e vertical");
    break;
  case "BISPO":
    console.log("Diagonal")
    break;
  case "RAINHA":
    console.log("Qualquer direção");
    break;
  case "REI":
    console.log("Qualquer direção, uma casa.");
    break;
  default:
    console.log("Não é uma peça de xadrez.") 
}
