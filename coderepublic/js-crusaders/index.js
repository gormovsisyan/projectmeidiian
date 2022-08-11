function bubbleSortToUp(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(bubbleSortToUp([1, 5, 4, 19, 0]));

function getFactorialOf(n) {
  getFactorialOf.cache = getFactorialOf.cache || [];

  if (n <= 1) {
    return 1;
  }

  if (!getFactorialOf.cache[n]) {
    getFactorialOf.cache[n] = n * getFactorialOf(n - 1);
  }

  return getFactorialOf.cache[n];
}

console.log(getFactorialOf(5));
console.log(getFactorialOf(4));