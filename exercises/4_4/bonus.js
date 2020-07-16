let algRomanos = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000,
}
// console.log(algRomanos["V"]);

let number = "LXIX";
let total = 0;

for (let j = number.length -1 ; j >= 0 ; j -= 1){
  for (let i in algRomanos){
    
    if (i == number[j]){
      if (algRomanos[number[j]] >= algRomanos[number[j + 1]] || j == number.length - 1){
        total += algRomanos[number[j]];
      }
      else {
        total -= algRomanos[number[j]];
      }
      break;
    }
  }

}

console.log(total);