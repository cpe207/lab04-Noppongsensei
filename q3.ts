function primeNumber(a:number) {
  let NUM=0;
  for (let i = 0; i <=a; i++) {
    if(a%i===0){
      NUM+=1;}
      
  }
  if(NUM===2)return "YES";
  else return "NO";
}
const d1 = 10;
const d2 = 29;
const d3 = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;
//ณพพงศ์ อนรรฆพฤฒ 660610750