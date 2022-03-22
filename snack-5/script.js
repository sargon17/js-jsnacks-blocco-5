let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function arraySection(array, min, max) {
  let newArray = [];
  for (let index = ++min; index < max; index++) {
    newArray.push(array[index]);
  }
  return newArray;
}

console.log(arraySection(array, 1, 5));
