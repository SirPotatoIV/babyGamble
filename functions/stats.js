// create variables to store each guess category and create a basic shape.
// pie chart
// -- {category: total, label: label_name}
const data = require('./sampleData.json');
const userGuesses = data.guesses;

let sex = {
  male: 0,
  female: 0,
  chartData: [
    { male: 0, label: 'male' },
    { female: 0, label: 'female' },
  ],
};

let eyeColor = {
  brown: 0,
  blue: 0,
  green: 0,
  hazel: 0,
  chartData: [
    { brown: 0, label: 'brown' },
    { blue: 0, label: 'blue' },
    { green: 0, label: 'green' },
    { hazel: 0, label: 'hazel' },
  ],
};

let hairColor = {
  brown: 0,
  blonde: 0,
  black: 0,
  red: 0,
  bald: 0,
  chartData: [
    { brown: 0, label: 'brown' },
    { blonde: 0, label: 'blonde' },
    { black: 0, label: 'black' },
    { red: 0, label: 'red' },
    { bald: 0, label: 'bald' },
  ],
};

// bar graph
// -- chartData: [category, total]
let length = {
  guesses: [],
  chartData: [
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
  ],
};

let weight = {
  guesses: [],
  chartData: [
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
  ],
};

let dates = {
  guesses: [],
  chartData: [
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
  ],
};

let time = {
  guesses: [],
  chartData: [
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
  ],
};

let dateAndTime = {
  guesses: [],
  chartData: [
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
  ],
};

// mark series (scatter plot)
// [{categoryXaxis: total, categoryYaxis, total, size: 2}]
let lengthAndWeight = [{ length: 0, weight: 0, size: 2 }];

// sum up the total count of sex, eyeColor, and hairColor by category
const categoryCount = (guesses) => {
  guesses.forEach((guess) => {
    sex[guess.sex]++;
    hairColor[guess.hairColor]++;
    // I messed up on the values for eye color in the guessing form.
    // This corrects that error.
    switch (guess.eyeColor) {
      case 'brown':
        eyeColor.brown++;
        break;
      case 'blonde':
        eyeColor.blue++;
        break;
      case 'black':
        eyeColor.green++;
        break;
      case 'red':
        eyeColor.hazel++;
        break;
      default:
        eyeColor.unknown++;
    }
  });
  console.log(sex, hairColor, eyeColor);
};
categoryCount(userGuesses);
// put all the weights into a single array
// -- convert each weight guess into a single number
// -- There are 16 ounces in a pound, and add that to the pounds property
// put all the lengths into a single array
// -- calculate how you are bucketing.
// -- calculate totals in each bucket.
// take the weight guess and the length guess and put then in an object as a pair
// -- [{weight: 6.5, length: 22}, {weight: 8.6, length: 19}]
// put all dates into a single array
// -- convert into a date datatype
// -- calculate how you are bucketing.
// -- calculate totals in each bucket.
// put all times into a single array.
// -- calculate how you are bucketing.
// -- calculate totals in each bucket.

// bucketing
// -- total number of guesses
// -- calculate the range: max - min (there may be Math methods for this)
// -- divide range by guesses
