/**
 * @param {number[]} arr - Array of numbers.
 * @returns {number} - The number closest to zero.
 */
function findNearestToZero(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let nearest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i]) < Math.abs(nearest)) {
      nearest = arr[i];
    } else if (Math.abs(arr[i]) === Math.abs(nearest) && arr[i] > nearest) {
      nearest = arr[i];
    }
  }

  return nearest;
}

console.log(findNearestToZero([4, -1, 2, -2, 3])); // Output: -1
console.log(findNearestToZero([-1, 1])); // Output: 1
console.log(findNearestToZero([])); // Output: 0
console.log(findNearestToZero([0])); // Output: 0
