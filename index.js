var rec = {
    perimeter: (x, y) => (2 * (x + y)),
    area: (x, y) => (x * y)
}
function solveRec(l, b) {
    console.log("solving rectablle ");
    if (l <= 0 || b <= 0) {
        console.log("Less than zero");
    }
    else {
        console.log("rectangle area " + rec.area(l, b));
        console.log("rectangle perimeter " + rec.perimeter(l, b));

    }
}

solveRec(2, 4)