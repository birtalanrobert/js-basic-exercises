function printSieve(values) {
  let result = '';
  for(let i=2; i<=values.length; i++) {
    if(values[i]) {
      result += i + ' ';
    }
  }
  return result;
}

function calculateSieveOfEratosthenes(n) {
  if(n > 2) {
    let values = Array(n);
    values.fill(true);

    for(let i=2; i<=Math.sqrt(n); i++) {
      if(values[i]) {
        for(let j=i*i; j<n; j+=i) {
            values[j] = false;
        }
      }
    }

    console.log(printSieve(values));
  }
}

calculateSieveOfEratosthenes(30);
console.log('-----------------------------');
calculateSieveOfEratosthenes(5);
console.log('-----------------------------');
calculateSieveOfEratosthenes(121);
console.log('-----------------------------');
calculateSieveOfEratosthenes(1000);
console.log('-----------------------------');
calculateSieveOfEratosthenes(3);
console.log('-----------------------------');
calculateSieveOfEratosthenes(2);
console.log('-----------------------------');
calculateSieveOfEratosthenes(1);
console.log('-----------------------------');
calculateSieveOfEratosthenes(0);
console.log('-----------------------------');
calculateSieveOfEratosthenes(-5);
console.log('-----------------------------');
calculateSieveOfEratosthenes('asd');
