const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

const binarySearch = (arr, n) => {
  let min = 0;
  let max = arr.length - 1;
  let guess;
  let totalGuess = 0;

  while (max >= min) {
    guess = Math.floor((max + min) / 2);
    totalGuess++;
    if (arr[guess] === n) {
      console.log(`Total Number of Guesses: ${totalGuess}`);
      return;
    } else if (arr[guess] < n) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }

  return -1;
};

binarySearch(primes, 43);
binarySearch(primes, 41);
