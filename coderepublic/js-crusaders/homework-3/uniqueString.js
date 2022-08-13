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

function set(vectorArr, el) {
  let module = el % 64;
  let index = (el - module) / 64;

  vectorArr[index] |= (1 << module);
}

function get(vectorArr, index, module) {
  return vectorArr[index] & (1 << module);
}

console.log(isUnique('👩'));

function isUniqueBitVector(str) {
  let vectorArr = [];

  for (let i in str) {
    let module = str.codePointAt(i) % 64;
    let index = (str.codePointAt(i) - module) / 64;

    if(get(vectorArr, index, module)) {
      return false
    }

    set(vectorArr, str.codePointAt(i));
  }

  return true;
}
console.log(isUniqueBitVector('👩'));