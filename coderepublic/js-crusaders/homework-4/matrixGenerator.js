let M = 2;
let N = 2;

function generateMatrix(m, n) {
  let matrix = [];

  for (let i = 0; i < m * n; ++i) {
    if (!matrix[Math.floor(i / m)]) {
      matrix[Math.floor(i / m)] = [];
    }

    matrix[Math.floor(i / m)][i % n] = i;
  }

  return matrix;
}

console.log(generateMatrix(M, N));
