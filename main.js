
let sum = (function () {
    let res = 0; 
    return function(x) {
        res += x; 
        return res; 
    };
})();

console.log(sum(3));
console.log(sum(5));
console.log(sum(10));
