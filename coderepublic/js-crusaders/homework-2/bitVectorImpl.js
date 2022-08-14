let intSize = 32;
let minInteger = 0;
let maxInteger = Math.pow(2, 6);
let count = 10;

function set(vectorArr, el) {
  let module = el % intSize;
  let index = (el - module) / intSize;

  vectorArr[index] |= (1 << module);
}

function get(vectorArr, index, module) {
  return vectorArr[index] & (1 << module);
}

function bitVectorImpl(arr) {
  let vectorArr = new Array(maxInteger / intSize).fill(0b0);
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    set(vectorArr, arr[i]);
  }

  for (let i = 0; i < vectorArr.length; i++) {
    for (let j = 0; j < intSize; j++) {
      if (get(vectorArr, i, j)) {
        resultArr.push(i * intSize + j);
      }
    }
  }

  return resultArr;
}

console.log(bitVectorImpl([189, 632, 123, 1, 87, 26, 2, 98, 5, 187, 99, 555, 73, 7]));