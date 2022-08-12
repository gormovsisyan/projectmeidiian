let testArr = [];

for (let i = 0; i <= 50; i++) {
  testArr.push(Math.floor(Math.random() * 10000));
}

function bitVectorImpl(arr) {
  let vectorArr = [];

  arr.forEach((el) => {
    vectorArr[el] = 1;
  })

  let resultArr = Object.keys(vectorArr);

  return resultArr;
}

console.log(bitVectorImpl(testArr));