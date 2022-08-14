class BigInteger {
  constructor(int) {
    if (typeof int !== 'string') {
      throw new Error('Enter int value in string type');
    }

    if (Number.isNaN(+int)) {
      throw new Error('Enter valid integer');
    }

    this.int = int;
  }

  create(int = this.int) {
    let intArr = [];
    let chunkSize = 3;
    let module = int.length % chunkSize;
    let modulePart = '';

    for (let i = int.length - 1; i > module; i -= chunkSize) {
      let lengthPart = '';

      lengthPart += int[i - 2] + int[i - 1] + int[i];

      intArr.unshift(+lengthPart);
    }

    for (let i = 0; i < module; i++) {
      modulePart += int[i]
    }

    if (modulePart) {
      intArr.unshift(+modulePart)
    }

    return intArr;
  }

  plus(secondInt) {
    let first = this.create();
    let second = this.create(secondInt);
    let additionResult = [];

    for (let i = Math.max(first.length - 1, second.length - 1); i >= 0; i--) {
      let addition = (first[i] || 0) + (second[i] || 0);

      if (addition >= 1000) {
        addition -= 1000;

        if (first[i - 1]) {
          first[i - 1] += 1;
        } else {
          first.unshift(1);
        }
      }

      additionResult.unshift(addition);
    }


    return additionResult;
  }

  minus(secondInt) {
    let first = this.create();
    let second = this.create(secondInt);
    let subtractionResult = [];

    for (let i = Math.max(first.length - 1, second.length - 1); i >= 0; i--) {
      let subtraction = (first[i] || 0) - (second[i] || 0);

      if (subtraction < 0) {
        subtraction *= -1;

        if (first[i - 1]) {
          first[i - 1] -= 1;
        } else {
          first.unshift(-1);
        }
      }

      subtractionResult.unshift(subtraction);
    }


    return subtractionResult;
  }
}

let bigIntTest = new BigInteger('1234567890');
let bigIntTest2 = new BigInteger('4567890');
console.log(bigIntTest.create());
console.log(bigIntTest.plus(bigIntTest2.int));
console.log(bigIntTest.minus(bigIntTest2.int));
