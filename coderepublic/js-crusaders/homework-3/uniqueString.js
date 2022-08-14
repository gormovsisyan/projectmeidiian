function isUnique(str) {
  let charSet = {};

  for (let index in str) {
    if(charSet.hasOwnProperty(str.codePointAt(index))) {
      return false;
    }

    charSet[str.codePointAt(index)] = 1;
  }

  return true;
}

console.log(isUnique('👩 👶'));