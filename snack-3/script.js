// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

function mirrorWord(string) {
  let splitReverseString = string.split("").reverse();
  let newString = splitReverseString.join("");
  return newString;
}

console.log(mirrorWord("ciao"));
