const numbers = [
  { price: 45, title: "productName1" },
  { price: 28, title: "productName2" },
  { price: 98, title: "productName3" },
  { price: 36, title: "productName4" },
  { price: 26, title: "productName5" },
  { price: 91, title: "productName6" },
  { price: 94, title: "productName7" },
  { price: 76, title: "productName8" },
  { price: 25, title: "productName9" },
  { price: 57, title: "productName10" },
];

function insertionSort(collection) {
  let j, i, temp;
  let dataSize = collection.length;

  console.log("unsorted: ", collection);
  for (i = 1; i < dataSize; i++) {
    j = i - 1;
    temp = collection[i];

    while (j >= 0 && collection[j].price > temp.price) {
      collection[j + 1] = collection[j];
      j = j - 1;
    }

    collection[j + 1] = temp;
  }
  console.log("sorted: ", collection);
}

insertionSort(numbers);
