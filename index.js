var rec = require('./rectangle');
function solveRec(l, b) {
    console.log("solving rectangle computations ");
    rec(l, b, (err, rectangle) => {
        if (err) {
            console.log("ERROR" + err.message)
        }
        else {
            console.log("The area of the  rectangle is " + rectangle.area());
            console.log("The perimeter of the  rectangle is " + rectangle.perimeter());

        }
    });

    console.log("final exit")
}

solveRec(2, 4)