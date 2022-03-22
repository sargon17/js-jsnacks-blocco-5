// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro, es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

let numbers = [1, 2, 3, 4, 5];
let letters = ["a", "b", "c", "d", "e"];

console.log(mergeTwoArrayInOrder(numbers, letters));

function mergeTwoArrayInOrder(array1, array2) {
  let array3 = [];
  console.log(array1, array2);
  while (array1.length > 0 && array2.length > 0) {
    let [element1, ...args1] = array1;
    array1 = args1;
    let [element2, ...args2] = array2;
    array2 = args2;

    array3 = [...array3, element1, element2];
  }
  return array3;
}
