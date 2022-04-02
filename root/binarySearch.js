const binarySearch = function (array, target) {
  // initialise variables to point to bounds of array
  let bottom = 0;
  let top = array.length - 1;
  let middle;

  while (bottom <= top) {
    // get index of middle value
    middle = Math.floor((bottom + top) / 2);
    const middleValue = array[middle];
    // return middle index if found
    if (middleValue === target) {
      return middle;
    }
    if (middleValue < target) {
      bottom = middle + 1;
    }
    if (middleValue > target) {
      top = middle - 1;
    }
  }
  // return null if target not in array
  return null;
};

console.log(binarySearch([10, 23, 27, 31, 47, 77, 89, 95, 97, 100], 89));
console.log(binarySearch([10, 23, 27, 31, 47, 77, 89, 95, 97, 100], 8));
console.log(binarySearch([10, 23, 27, 31, 47, 77, 89, 95, 97, 100], 100));
console.log(binarySearch([10, 23, 27, 31, 47, 77, 89, 95, 97, 100], 76));
console.log(binarySearch([], 76));
