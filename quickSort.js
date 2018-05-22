function quickSort (array) {
  quick(array, 0, array.length-1);
}

function quick (array, left, right) {
  if(array.length > 1) {
    let index = partition(array, left, right);

    if(left < index-1) {
      quick(array, left, index-1);
    }

    if(index < right) {
      quick(array, index, right);
    }
  }
}

function partition (array, left, right) {
  let pivotIndex = Math.floor((left+right)/2);
  let pivot = array[pivotIndex];
  let i = left;
  let j = right;

  while(i <= j) {
    while(array[i] < pivot) {
      i++;
    }
    while(pivot < array[j]) {
      j--;
    }
    if(i <= j) {
      [array[j], array[i]] = [array[i], array[j]];
      i++;
      j--;
    }
  }
  return i;
}

function generateRandomArray() {
  let arrayLength = Math.floor(Math.random() * 49) + 2;
  let array = Array(arrayLength);
  for(let i=0; i<arrayLength; i++) {
    array[i] = Math.floor(Math.random() * 600) - 300;
  }
  return array;
}

function printArray(array) {
  let result = '';
  for(let i=0; i<array.length; i++) {
    result += array[i] + '   ';
  }
  console.log(result);
}

for(let i=0; i<5; i++) {
  let numbers = generateRandomArray();
  console.log('before:');
  printArray(numbers);
  quickSort(numbers);
  console.log('after:');
  printArray(numbers);
  console.log('------------------------------');
}
