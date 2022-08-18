function sequentialSearch(arr, n) {
  let chunkSize = 10;

  for (let i = 0; i < arr.length; i += chunkSize) {
    for (let j = i; j < i + chunkSize; j++) {
      if (arr[j] === n) {
        return j;
      }
    }
  }

  return -1;
}

console.log(sequentialSearch([123, 7643, 162, 4, 76172, 8191, 5, 12, 10, 1, 8777, 999, 111, 242], 5));

function sequentialSearchWithTwoDirections(arr, n) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i] === n) {
      return i;
    }

    if (arr[arr.length - 1 - i] === n) {
      return arr.length - 1 - i;
    }
  }

  return -1;
}

console.log(sequentialSearchWithTwoDirections([123, 7643, 162, 4, 76172, 8191, 5, 12, 10, 1, 8777, 999, 111, 242], 5));