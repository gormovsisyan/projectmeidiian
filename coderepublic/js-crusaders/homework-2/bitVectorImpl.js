let intSize = 32;
let minInteger = 0;
let maxInteger = Math.pow(2, 6);
let count = 10;

function set(initialArr, vectorArr) {
  for (let i = 0; i < initialArr.length; i++) {
    let module = initialArr[i] % intSize;
    let index = (initialArr[i] - module) / intSize;

    vectorArr[index] |= (1 << module);
  }

  return vectorArr;
}

function get(vectorArr, resultArr) {
  for (let i = 0; i < vectorArr.length; i++) {
    for (let j = 0; j < intSize; j++) {
      if (vectorArr[i] & (1 << j)) {
        resultArr.push(i * intSize + j);
      }
    }
  }
  return resultArr;
}

function bitVectorImpl(arr) {
  let vectorArr = new Array(maxInteger / intSize).fill(0b0);
  let resultArr = [];

  set(arr, vectorArr);

  get(vectorArr, resultArr);

  return resultArr;
}

console.log(bitVectorImpl([189, 632, 123, 1, 87, 26, 2, 98, 5, 187, 99, 555, 73, 7]));