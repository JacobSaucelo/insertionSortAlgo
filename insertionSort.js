const numbers = [45, 28, 98, 36, 26, 91, 94, 76, 25, 57];
//!               j   i
//*               0   1   2   3
//?              28  45

function insertionSort(collection) {
  let i, j, temp;
  let dataSize = collection.length;

  for (i = 1; i < dataSize; i++) {
    temp = collection[i];
    j = i - 1;

    while (j >= 0 && collection[j] > temp) {
      collection[j + 1] = collection[j];
      j = j - 1;
    }
    collection[j + 1] = temp;
  }

  console.log(collection);
}

insertionSort(numbers);
