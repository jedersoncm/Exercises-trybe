let count = 0

document.querySelector('button').addEventListener('click', () => {
  count += 1; 
  document.querySelector("p").innerHTML = `Quantidade de clicks: ${count}`;
})