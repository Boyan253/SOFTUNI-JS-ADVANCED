function magicMatrices(matrix) {
    for (let i = 0; i < matrix.length - 1; i++) {
        let sumROWne = matrix[i].reduce((a, b) => a + b, 0);
        let sumROWtwo = matrix[i + 1].reduce((a, b) => a + b, 0);
        let sumCOWone = 0;
        let sumCOWTwo = 0;

        for (let j = 0; j < matrix.length; j++) {
            sumCOWone += matrix[i][j];
            sumCOWTwo += matrix[i + 1][j];
        }

        if (sumROWne !== sumROWtwo || sumCOWone !== sumCOWTwo) {
            return false;
        }
    }

    return true;
}