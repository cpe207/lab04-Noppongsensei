function primeNumber(a) {
    var NUM = 0;
    for (var i = 0; i <= a; i++) {
        if (a % i === 0) {
            NUM += 1;
        }
    }
    if (NUM === 2)
        return "YES";
    else
        return "NO";
}
var d1 = 10;
var d2 = 29;
var d3 = 2;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;
//ณพพงศ์ อนรรฆพฤฒ 660610750
