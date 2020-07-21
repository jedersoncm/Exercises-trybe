function verificaPalindrome(s){

  for (let i = 0 ; i < s.length / 2 ; i += 1){
    if (s[i] != s[s.length - 1 - i]) {
      return (false);
    }
  }
  return (true);
}

console.log(verificaPalindrome("asdfggfdsa"));