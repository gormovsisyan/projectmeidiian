let intSize = 32;
let minInteger = 0;
let maxInteger = Math.pow(2, 6);
let count = 10;

function bitVectorImpl(arr) {
  let vectorArr = new Array(maxInteger / intSize).fill(0b00000000000000000000000000000000);
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    let module = arr[i] % intSize;
    let index = (arr[i] - module) / intSize;

    vectorArr[index] |= (1 << module);
  }

  for (let i = 0; i < vectorArr.length; i++) {
    for (let j = 0; j < intSize; j++) {
      if (vectorArr[i] & (1 << j)) {
        resultArr.push(i * intSize + j);
      }
    }
  }


  return resultArr;
}

console.log(bitVectorImpl([5, 2, 4, 9, 10, 25, 7, 44, 33]));