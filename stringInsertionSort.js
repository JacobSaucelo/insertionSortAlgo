const numbers = [
  { score: 57, title: "Ashly Holland" },
  { score: 26, title: "Eva James" },
  { score: 45, title: "Zaria Mcmahon" },
  { score: 25, title: "Imani Young" },
  { score: 98, title: "Raegan Farrell" },
  { score: 94, title: "Amelie Owen" },
  { score: 91, title: "Thaddeus Nichols" },
  { score: 36, title: "Maddox Moreno" },
  { score: 28, title: "Elsa Hess" },
  { score: 76, title: "Justice Valdez" },
];

function insertionSort(collection) {
  let i, j, temp;
  let dataSize = collection.length;

  for (i = 1; i < dataSize; i++) {
    j = i - 1;
    temp = collection[i];

    while (
      j >= 0 &&
      collection[j].title.toLowerCase() > temp.title.toLowerCase()
    ) {
      collection[j + 1] = collection[j];
      j = j - 1;
    }
    collection[j + 1] = temp;
  }

  console.log("sorted: ", collection);
}

insertionSort(numbers);
