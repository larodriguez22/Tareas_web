// Cada vez que se haga un nuevo llamado a la funcion esta se multiplicara por 
// el valor guardado en la variable factor
function incrementByAFactor() {
  let factor = 2;
  return function () {
    factor = factor*2;
    return factor;
  };
}

const firstFactor = incrementByAFactor();
console.log(firstFactor());
console.log(firstFactor());
console.log(firstFactor());

const secondFactor = incrementByAFactor();
console.log(secondFactor());
console.log(secondFactor());
console.log(secondFactor());
