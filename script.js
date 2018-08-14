let ex = 0;

function mix() {
    let t = 1;
    function flap() {
        var isit = 0;
        isit = function () {
            return 1;
        }
        if (isit > 0) {
            return 1;
        } else {
            return 0;
        }
    }
    let x = flap();
    return t + x;
}

ex = mix();

console.log(ex);
