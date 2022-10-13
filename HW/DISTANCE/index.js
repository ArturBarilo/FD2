'use strict';

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function distance(start, end) {
    if (!(start instanceof Point) || !(end instanceof Point)) {
        return new Error('"start" and "end" should be instance of class "Point"');
    } else if (JSON.stringify(start) === JSON.stringify(end)) {
        return new Error('"start" and "end" should be different');
    }

    const d = Math.sqrt(Math.pow(start.x - end.x, 2) + Math.pow(start.y - end.y, 2));
    return d;
}


function askCoordinates(x1, y1, x2, y2) {
    const start = new Point(x1, y1);
    const end = new Point(x2, y2);

    return distance(start, end);
}

console.log(askCoordinates(1, 2, 3, 't'));

describe('Tests', () => {
    it('should return Error: "start" and "end" should be instance of class "Point"', function () {
        assert.deepEqual(distance(1, 2), new Error('"start" and "end" should be instance of class "Point"'));
    });
    it('should return Error: "start" and "end" should be different', function () {
        assert.deepEqual(askCoordinates(1, 1, 1, 1), new Error('"start" and "end" should be different'));
    });
    it('should return 1', function () {
        assert.deepEqual(askCoordinates(3, 4, 3, 5), 1);
    });
    it('should return 13.038404810405298', function () {
        assert.deepEqual(askCoordinates(1, 4, 8, 15), 13.038404810405298);
    });
    it('should return 2.8284271247461903', function () {
        assert.deepEqual(askCoordinates(1, 2, 3, 't'), NaN);
    });
})


