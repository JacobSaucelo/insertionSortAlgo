const numbers = [45, 28, 98, 36, 26, 91, 94, 76, 25, 57];
//!               j   i
//*               0   1   2   3
//?              28  45

function insertionSort(collection) {
  console.log("unsorted: ", collection);

  let i, j, temp;
  let dataSize = collection.length;

  for (i = 1; i < dataSize; i++) {
    j = i - 1;
    temp = collection[i];

    console.log("j: ", collection[j]);
    console.log("i: ", collection[i]);
    console.log("temp: ", collection[i]);

    while (j >= 0 && collection[j] > collection[i]) {
      collection[j + 1] = collection[j];
      j = j - 1;
    }
    collection[j + 1] = temp;
  }

  console.log("sorted:", collection);
}

insertionSort(numbers);
