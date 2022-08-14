let HIGH_SURROGATE = {
  START: 0xd800,
  END: 0xdbff
};

let LOW_SURROGATE = {
  START: 0xdc00,
  END: 0xdfff
};

function getSurrogatePair(astralCodePoint) {
  let highSurrogate = Math.floor((astralCodePoint - 0x10000) / 0x400) + 0xD800;
  let lowSurrogate = (astralCodePoint - 0x10000) % 0x400 + 0xDC00;

  return [highSurrogate, lowSurrogate];
}

function getAstralCodePoint(highSurrogate, lowSurrogate) {
  return (highSurrogate - 0xD800) * 0x400 + lowSurrogate - 0xDC00 + 0x10000;
}

function reverseString(str) {
  let reversedCharSet = {};
  let reversedStr = '';

  for (let i = 0; i < str.length; i++) {
    if (str.codePointAt(i) > Math.pow(2, 16)) {
      reversedCharSet[str.length - i] = str.codePointAt(i);
      i++;
    } else {
    }
    reversedCharSet[str.length - i] = str.codePointAt(i);
  }

  console.log(reversedCharSet);


  for (let i in reversedCharSet) {
    if (Array.isArray(reversedCharSet[i])) {
      // reversedStr += String.fromCodePoint(getAstralCodePoint(reversedCharSet[i][0], reversedCharSet[i][1]));
    } else {
      reversedStr += String.fromCodePoint(reversedCharSet[i]);
    }
  }

  return reversedStr;
}

// console.log(reverseString('👩 👶'));
console.log(reverseString('👩 👶 🧒🏻 👦🏻'));
