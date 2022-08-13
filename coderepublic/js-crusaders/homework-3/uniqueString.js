function isUnique(str) {
  let hashTable = {};

  for (let index in str) {
    if(hashTable.hasOwnProperty(str.codePointAt(index))) {
      return false;
    }

    hashTable[str.codePointAt(index)] = 1;
  }

  return true;
}

console.log(isUnique('👩 gor'));