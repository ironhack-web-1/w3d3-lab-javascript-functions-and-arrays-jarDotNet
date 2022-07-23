// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 >= num2) 
    return num1;
  else
    return num2;
}



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(arrayOfWords) {

  if (arrayOfWords === null || arrayOfWords.length === 0)
    return null;

  let longestWord = "";

  arrayOfWords.forEach(word => {
    if (word.length > longestWord.length)
      longestWord = word;
  }); 
  
  return longestWord;
}



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {
  
  let sum = 0;

  if (arrayOfNumbers !== null && arrayOfNumbers.length !== 0)
  {
    arrayOfNumbers.forEach(num => sum += num); 
  }
  
  return sum;
}



// Iteration #3.1 Bonus: A generic sum() function
function sum(arrayOfData) {
  
  if (arrayOfData === null || arrayOfData.length === 0)
    return 0;
    
  let sum = 0;

  arrayOfData.forEach(data => {
    switch (typeof data) {
      case 'number':
        sum += data;
        break;

      case 'string':
        sum += data.length;
        break;

      case 'boolean':
        sum += Number(data);
        break;
    
      default:
        throw new Error("Unsupported data type sir or ma'am");
    }
  }); 

  return sum;
}



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNumbers) {

  if (arrayOfNumbers === null || arrayOfNumbers.length === 0)
    return null;

  let sum = sumNumbers(arrayOfNumbers);

  return sum / arrayOfNumbers.length;
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(arrayOfWords) { 

  if (arrayOfWords === null || arrayOfWords.length === 0)
    return null;

  let sum = 0;

  arrayOfWords.forEach(word => sum += word.length); 
  
  return sum / arrayOfWords.length;
}

// Bonus - Iteration #4.1
function avg(arrayOfData) {

  if (arrayOfData === null || arrayOfData.length === 0)
    return null;

  let total = sum(arrayOfData);

  return total / arrayOfData.length;
}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(arrayOfWords) {

  if (arrayOfWords === null || arrayOfWords.length === 0)
    return null;

  let newArray = [];

  arrayOfWords.forEach(word => {
    if (!newArray.includes(word))
      newArray.push(word);
  }); 

  return newArray;
}



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arrayOfWords, wordToSeach) {

  if (arrayOfWords === null || arrayOfWords.length === 0)
    return null;

  return arrayOfWords.includes(wordToSeach);
}



// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(arrayOfWords, wordToSeach) {

  let count = 0;

  if (arrayOfWords !== null && arrayOfWords.length !== 0)
  {
    arrayOfWords.forEach(word => {
      if (word === wordToSeach)
        count++;
    }); 
  }

  return count;
}



// Iteration #8.1 Bonus: Product of adjacent numbers
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct(matrix) {

  let maxProduct = 0;

  for (let x = 0; x < matrix.length; x++) {

    let row = matrix[x];

    for (let y = 0; y < row.length; y++) {

      let rowProduct = getRowFourAdjacentNumbersProduct(row, x, y);
      if (rowProduct > maxProduct)
        maxProduct = rowProduct;

      let columnProduct = getColumnFourAdjacentNumbersProduct(matrix, x, y);
      if (columnProduct > maxProduct)
        maxProduct = columnProduct;
    }
  }

  return maxProduct;
}

function getRowFourAdjacentNumbersProduct(row, x, y) {

  return row[y] * row[y+1] * row[y+2] * row[y+3];
}

function getColumnFourAdjacentNumbersProduct(matrix, x, y) {

  let value = matrix[x][y];

  if (matrix.length > x+1)
    value *= matrix[x+1][y];

  if (matrix.length > x+2)
    value *= matrix[x+2][y];

  if (matrix.length > x+3)
    value *= matrix[x+3][y];

  return value;
}



// Iteration #8.1 Bonus: Product of diagonals
function greatestProductOfDiagonals(matrix) {

  let maxProduct = 0;

  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[0].length; y++) {

      let rowProduct = getDiagonalFourAdjacentNumbersProduct(matrix, x, y);
      if (rowProduct > maxProduct)
        maxProduct = rowProduct;

      let columnProduct = getInverseDiagonalFourAdjacentNumbersProduct(matrix, x, y);
      if (columnProduct > maxProduct)
        maxProduct = columnProduct;
    }
  }

  return maxProduct;
}

function getDiagonalFourAdjacentNumbersProduct(matrix, x, y) {

  let value = matrix[x][y];

  if (matrix.length > x+1 && matrix.length > y+1)
    value *= matrix[x+1][y+1];

  if (matrix.length > x+2 && matrix.length > y+2)
    value *= matrix[x+2][y+2];

  if (matrix.length > x+3 && matrix.length > y+3)
    value *= matrix[x+3][y+3];

  return value;
}

function getInverseDiagonalFourAdjacentNumbersProduct(matrix, x, y) {

  let value = matrix[x][y];

  if (matrix.length > x+1 && y-1 >= 0)
    value *= matrix[x+1][y-1];

  if (matrix.length > x+2 && y-2 >= 0)
    value *= matrix[x+2][y-2];

  if (matrix.length > x+3 && y-3 >= 0)
    value *= matrix[x+3][y-3];

  return value;
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct,
    greatestProductOfDiagonals
  };
}
