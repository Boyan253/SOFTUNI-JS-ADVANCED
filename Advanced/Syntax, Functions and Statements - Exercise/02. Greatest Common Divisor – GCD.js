function solve(first, second) {
    let min = Math.min(first, second);
    let resul = 0;

    for (let i= 1; i <= min; i ++) {
        if (first % i === 0 && second % i === 0) {
            resul = i;
        }
    }
    console.log(resul);
}

solve(2154, 458);