import words from "./words_dictionary.json";

const objWords = Object.keys(words);

var keyboard = [" ", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
// comments example for input 27753 (apple)

const wordIdentifier = (arrayOfNumbers, objWord, totalLength) => {
  for (let i = 1; i < totalLength; i++) {
    if (!keyboard[parseInt(arrayOfNumbers.charAt(i)) - 1].includes(objWord.charAt(i))) {
      break;
    }
    if (i == totalLength - 1) {
      return objWord;
    }
  }
};


export const l49 = (arrayOfNumbers) => {
  let lengthOfWord = arrayOfNumbers.length;

  if(lengthOfWord == 0 || isNaN(arrayOfNumbers) || arrayOfNumbers.includes('#')){
    return [];
  }

  let wordsArray = [];
  let keyCharsNumbers = parseInt(arrayOfNumbers.charAt(0)); // 2 => first number
  let keyChars = keyboard[keyCharsNumbers - 1]; // abc

  if(lengthOfWord == 1){
    for(let i = 0; i<keyChars.length; i++){
        wordsArray[i] = keyChars[i];
    }
  }

  for (let i = 0; i < objWords.length; i++) {
    //                   lenght of word           is word starts from some letter
    if(objWords[i].length == lengthOfWord && keyChars.includes(objWords[i].charAt(0))){
      // Checking word length and first letter of word
      let result = wordIdentifier(arrayOfNumbers, objWords[i], lengthOfWord);
      if (result != undefined) wordsArray.push(result);
    }
  }

  return(wordsArray);
};