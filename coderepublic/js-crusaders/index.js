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

function binarySearch(arr, n) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === n) {
      return mid;
    }

    if (arr[mid] < n) {
      start = mid + 1;
    }

    if (arr[mid] > n) {
      end = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 6, 7, 8, 9, 10], 5));