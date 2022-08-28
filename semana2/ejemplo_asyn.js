function asyncFunction(callback, i) {
    setTimeout(() => {
      callback(`Evaluating ${i}`);
    }, 1000);
  }
  
  function printData(data) {
    console.log(data);
  }
  
  for (let i = 0; i < 10; i++) {
    asyncFunction(printData, i);
  }