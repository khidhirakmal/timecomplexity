/// Time Complexity O(n) - Linear ///
function findVowel(string) {
  const vowels = ["A", "E", "I", "O", "U"];
  let count = 0;

  for (characters of string.toUpperCase()) {
    if (vowels.includes(characters)) {
      count++;
    }
  }

  return count;
}

console.log(findVowel("I like burgers"));

/// Time Complexity O(2^n) - Exponential ///
function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }

  // two more recursive calls made, making it exponential
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(10));

/// Time Complexity O(log n) - Logarithmic?? ///
function vowelSearch(array, target) {
  let firstIndex = 0;
  let lastIndex = array.length - 1;
  let indices = [];

  // Binary Search
  // Loop ends when firstIndex is greater than or equals to lastIndex
  while (firstIndex <= lastIndex) {
    let middleIndex = Math.floor((firstIndex + lastIndex) / 2);

    // Check if middle element is the target
    if (array[middleIndex] === target) {
      indices.push(middleIndex);

      // Continue searching for the same target in the left and right halves
      let leftIndex = middleIndex - 1;
      // Linear Search - Left (nested while loop)
      while (leftIndex >= 0 && array[leftIndex] === target) {
        indices.push(leftIndex);
        leftIndex--;
      }
      let rightIndex = middleIndex + 1;
      // Linear Search - Right (nested while loop)
      while (rightIndex < array.length && array[rightIndex] === target) {
        indices.push(rightIndex);
        rightIndex++;
      }
      return indices;
    }
    // Binary - Adjusting search range
    if (array[middleIndex] > target) {
      lastIndex = middleIndex - 1;
    } else {
      firstIndex = middleIndex + 1;
    }
  }

  return indices;
}

let alphabets = [
  "A", // 0
  "B",
  "C",
  "D",
  "E", // 4
  "F",
  "G",
  "H",
  "I", // 8
  "J",
  "K",
  "L",
  "M", // 12
  "N",
  "O",
  "P",
  "Q", // 16
  "R",
  "S",
  "T",
  "U", // 20
  "V",
  "W",
  "X",
  "Y",
  "Z", // 25
];

let vowels = ["A", "E", "I", "O", "U"];

// Loops over each element in vowels array (linear time complexity)
for (vowel of vowels) {
  console.log(vowelSearch(alphabets, vowel));
}
