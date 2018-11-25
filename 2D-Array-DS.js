
// Complete the hourglassSum function below.

let getMatrix = (arr, line, col) => {
    let res = [];
    for (let i = line; i < line + 3; i++) {
        res[i - line] = [];
        for (let j = col; j < col + 3; j++) {
            res[i - line].push(arr[i][j]);
        }
    }
    return res;
};

let getAllMatrix = arr => {
    const length = arr.length;
    let allMatrixes = [];
    for (let i = 0; i < length - 2; i++) {
        for (let j = 0; j < length - 2; j++) {
            allMatrixes.push(getMatrix(arr, i, j));
        }
    }
    return allMatrixes;
};
let hourglassSum = arr => {
    let matrices = getAllMatrix(arr);
    let res = [];
    matrices.forEach(matrix => {
        let a = matrix[0].reduce((acc, curr) => acc + curr),
            b = matrix[2].reduce((acc, curr) => acc + curr),
            c = matrix[1][1];
        res.push(a + b + c);
    });

    return Math.max(...res);
};