function evenNumbersWithin(destination) {
  console.log(destination);
  // get the number from 0 to destination
  let sum = 0;
  let count = 0;
  let arrayOfEvenNumbers = [];

  // write your code here
  for (let i = 0; i <= destination; i++) {
    if (i % 2 === 0) {
      //check if divisible by 2
      sum += i;
      arrayOfEvenNumbers.push(i);
    }
  }
  count = arrayOfEvenNumbers.length;

  return {
    count,
    sum,
    arrayOfEvenNumbers,
  };
}

console.log(evenNumbersWithin(107))