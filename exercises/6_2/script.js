window.onload = function () {
  const selector = document.querySelector('#estados');
  const estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let i = 0 ; i < estados.length ; i += 1){
    const item = document.createElement('option');
    item.innerHTML = estados[i];
    selector.appendChild(item);
  }
}
const formulario = document.querySelector('#form'); 


function verificaCpf (num){
  if (num.length !== 11){
    alert("O cpf deve conter 11 digitos");
  }
  for (let i = 0 ; i < num.length ; i += 1){
    //console.log(num[i]);
    //console.log(Number.isInteger(parseInt(num[i])));
    if (!Number.isInteger(parseInt(num[i]))){
      alert("O campo deve conter somente números");
    }
    //console.log(num[i]);
  }
}
function verificaData(date){
  if (date.length !== 10){
    alert("Digite a data no formato DD/MM/AAAA");
  }
  let day =`${date[0]}${date[1]}`;
  day = parseInt(day)
  let month = `${date[3]}${date[4]}`;
  month = parseInt(month);
  let year = `${date[6]}${date[7]}${date[8]}${date[9]}`;
  year = parseInt(year);

  if (!Number.isInteger(day) || !Number.isInteger(month) || !Number.isInteger(year)){
    alert("Digite a data no formato DD/MM/AAAA");
    
  }

  if (day > 31 || day < 1){
    alert("O dia deve ser um numero entre 01 e 31");
  }

  if (month > 12 || month < 1){
    alert("O mês deve ser um numero entre 01 e 12");
  }

  if (year < 0) {
    alert("Digite um valor positivo para o ano");
  }
  
  if (date[2] !== '/' || date[5] !== '/'){
    alert("Digite a data no formato DD/MM/AAAA");
  }
};

let outputDiv = document.querySelector('.output');

formulario.addEventListener('submit', function(event){
  event.preventDefault();
  
  const cpfInput = document.querySelector('#cpf').value;
  verificaCpf(cpfInput);
  const date = document.querySelector('#date').value;
  verificaData(date);
  const name = document.querySelector('#nome').value
  const email = document.querySelector('#email').value
  const endereco = document.querySelector('#endereco').value
  const cidade = document.querySelector('#cidade').value
  const estado = document.querySelector('#estados').value
  const resumo = document.querySelector('#resumo').value
  const cargo = document.querySelector('#cargo').value
  const descricao = document.querySelector('#descricao').value

  const array = [name, email, cpfInput, endereco, cidade, estado, resumo, cargo, descricao, date]

  for (let i = 0 ; i < array.length ; i += 1){
    let element = document.createElement('p');
    element.innerHTML = array[i];
    outputDiv.appendChild(element);
  }
  //element.innerHTML = cpfInput;
  
})

// const submitButton = document.querySelector('.button');
// submitButton.addEventListener('click',function(){
//   const inputCpf = document.querySelector('.cpf');
//   verificaCpf(inputCpf.value);
// });


