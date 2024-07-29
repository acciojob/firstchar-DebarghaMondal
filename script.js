function firstChar(text) {
  // your code here
let letter = text.charAt(0);
	return letter;
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
