function firstChar(text) {
  // iterate over the characters in 'text'
  for (let i = 0; i < text.length; i++) {
    // if the current character is not a space, return it
    if (text[i] !== ' ') {
      return text[i];
    }
  }

  // if no non-space character was found, return an empty string
  return '';
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:")
alert(firstChar(text));
