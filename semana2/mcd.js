
const mcd = (a, b) => a == b ? a : mcd(Math.min(a, b), Math.max(a, b) - Math.min(a, b));

console.log("mcd arrow function", mcd(50,10));
