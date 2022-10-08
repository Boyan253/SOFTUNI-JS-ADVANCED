class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        if (!(a instanceof Point) || !(b instanceof Point)){
            throw new TypeError('Parameters must be of type Point');
        }
        return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
    }
}
