function getFibonacciNumbers(n) {
  getFibonacciNumbers.cache = getFibonacciNumbers.cache || [];

  if (n < 2) {
    return [1];
  }

  if (n < 3) {
    return [1, 1];
  }

  if (!getFibonacciNumbers.cache[n]) {
    getFibonacciNumbers.cache = getFibonacciNumbers(n - 1);

    getFibonacciNumbers.cache.push(getFibonacciNumbers.cache[getFibonacciNumbers.cache.length - 1] + getFibonacciNumbers.cache[getFibonacciNumbers.cache.length - 2]);
  } else {
    return getFibonacciNumbers.cache.slice(0, n);
  }

  return getFibonacciNumbers.cache;
}

