function reverseString(str) {
  let reversedCharSet = [];
  let reversedStr = '';

  for (let i in str) {
    // reversedCharSet.push(str.codePointAt(i));
  }

  console.log(str.codePointAt(0));
  console.log(str.codePointAt(1));
  console.log(str.length);

  console.log(reversedCharSet);

  for (let i of reversedCharSet) {
    // reversedStr += String.fromCodePoint(i);
  }

}

console.log(reverseString('👩'));
console.log(reverseString('👶'));