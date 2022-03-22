// Crea un array di 10 oggetti che rappresentano una zucchina
// indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

const zucchini = [
  {
    id: 1,
    type: "Zucchino nero di Milano",
    weight: 101,
    lenght: 12,
  },
  {
    id: 2,
    type: "Zucchino romanesco",
    weight: 24,
    lenght: 6,
  },
  {
    id: 3,
    type: "Zucchino ortolano di Faenza",
    weight: 74,
    lenght: 16,
  },
  {
    id: 4,
    type: "Zucchina lunga fiorentina",
    weight: 34,
    lenght: 14,
  },
  {
    id: 5,
    type: "Zucchino siciliano",
    weight: 76,
    lenght: 8,
  },
  {
    id: 6,
    type: "Zucchina striata di Napoli",
    weight: 22,
    lenght: 4,
  },
  {
    id: 7,
    type: "Zucchina bianca triestina",
    weight: 54,
    lenght: 9,
  },
  {
    id: 8,
    type: "Zucchina rigata pugliese",
    weight: 124,
    lenght: 19,
  },
  {
    id: 9,
    type: "Zucchino tondo di Piacenza",
    weight: 58,
    lenght: 8,
  },
  {
    id: 10,
    type: "Zucchino tondo di Nizza",
    weight: 33,
    lenght: 7,
  },
];

function allObjWeightSum(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    let { weight } = array[index];
    sum += weight;
  }
  return sum;
}
console.log(allObjWeightSum(zucchini));
