// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

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

let zucchiniUnder = [];
let zucchiniOver = [];

zucchiniLenghtDivider(zucchini, 15);
let zucchiniUnderTotalWeight = allObjWeightSum(zucchiniUnder);
console.log(zucchiniUnderTotalWeight);
let zucchiniOverTotalWeight = allObjWeightSum(zucchiniOver);
console.log(zucchiniOverTotalWeight);

function zucchiniLenghtDivider(array, number) {
  for (let index = 0; index < array.length; index++) {
    if (array[index].lenght < number) {
      zucchiniUnder.push(array[index]);
    } else {
      zucchiniOver.push(array[index]);
    }
  }
}

function allObjWeightSum(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    let { weight } = array[index];
    sum += weight;
  }
  return sum;
}
