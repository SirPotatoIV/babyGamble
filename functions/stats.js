// create variables to store each guess category and create a basic shape.
// pie chart
// -- {category: total, label: label_name}
const data = require('./sampleData.json');
const customParseFormat = require('dayjs/plugin/customParseFormat');
const dayjs = require('dayjs');
dayjs.extend(customParseFormat);
const userGuesses = data.guesses;

let sex = {
  male: 0,
  female: 0,
  chartData: [],
};
// { male: 0, label: 'male' },
// { female: 0, label: 'female' },

let eyeColor = {
  brown: 0,
  blue: 0,
  green: 0,
  hazel: 0,
  chartData: [],
};
// { brown: 0, label: 'brown' },
// { blue: 0, label: 'blue' },
// { green: 0, label: 'green' },
// { hazel: 0, label: 'hazel' },

let hairColor = {
  brown: 0,
  blonde: 0,
  black: 0,
  red: 0,
  bald: 0,
  chartData: [],
};
// chartData: [
//   { brown: 0, label: 'brown' },
//   { blonde: 0, label: 'blonde' },
//   { black: 0, label: 'black' },
//   { red: 0, label: 'red' },
//   { bald: 0, label: 'bald' },
// ],

// bar graph
// -- chartData: [category, total]
let lengths = {
  guesses: [],
  chartData: [],
};

let weights = {
  guesses: [],
  chartData: [],
};

let dates = {
  guesses: [],
  chartData: [],
};

let times = {
  guesses: [],
  chartData: [],
};

// mark series (scatter plot)
// [{categoryXaxis: total, categoryYaxis, total, size: 2}]
let lengthAndWeight = {
  chartData: [],
};
let dateAndTimes = {
  guesses: [],
  chartData: [{ date: 0, time: 0, size: 2 }],
};

// sum up the total count of sex, eyeColor, and hairColor by category
const categoryCount = (guesses) => {
  guesses.forEach((guess) => {
    // covert to number and add ounces to pounds
    const guessWeight =
      parseInt(guess.weight.pounds, 10) +
      parseInt(guess.weight.ounces, 10) / 16;

    // convert to number
    const guessLength = parseInt(guess.length, 10);

    // had to reformat month for it to work with day.js.
    // -- First letter uppercase. Second and Third lowercase.
    const reformattedMonth = `${guess.date.month.charAt(
      0
    )}${guess.date.month.slice(1).toLowerCase()}`;

    // convert date into dayjs format
    const guessDate = dayjs(
      `${guess.date.year} ${reformattedMonth} ${guess.date.day}`,
      'YYYY MMM D'
    );

    // convert time into dayjs format
    const guessTime = dayjs(
      `${guess.time.hour} ${guess.time.minute} ${guess.time.meridiem}`,
      'h m A'
    );

    // count sex guesses
    sex[guess.sex]++;

    // count hair color guesses
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

    // put all the lengths into a single array
    // -- handle outliers
    if (guessLength < 50) lengths.guesses.push(guessLength);

    // put all the weights into a single array
    // -- handle outliers
    // -- convert each weight guess into a single number
    // -- There are 16 ounces in a pound, and add that to the pounds property
    if (guessWeight < 50) weights.guesses.push(guessWeight);

    // take the weight guess and the length guess and put then in an object as a pair
    // -- [{weight: 6.5, length: 22}, {weight: 8.6, length: 19}]
    // -- handle outliers
    lengthAndWeight.chartData.push({
      length: guessLength,
      weight: guessWeight,
      size: 2,
    });

    // put all dates into a single array
    // -- convert into a date datatype
    dates.guesses.push(guessDate);

    // put all times into a single array.
    times.guesses.push(guessTime);

    // put date and time into a single dataset.
    dateAndTimes.chartData.push({ date: guessDate, time: guessTime, size: 2 });
  });
};
categoryCount(userGuesses);

const pieChartData = (guessType) => {
  const categories = Object.keys(guessType);
  // remove chartData from categories
  categories.splice(categories.indexOf('chartData'), 1);
  // move each key into the chartData
  categories.forEach((category) => {
    guessType.chartData.push({
      angle: guessType[category],
      label: category,
      color: category,
    });
  });
};
// pieChartData(sex);
pieChartData(hairColor);

// bucketing
// -- total number of guesses
// -- calculate the range: max - min (there may be Math methods for this)
// -- divide range by guesses

const barChartData = (guessType, numOfBuckets) => {
  const guesses = guessType.guesses;

  const min = Math.min(...guesses);
  const max = Math.max(...guesses);
  const range = max - min;
  const bucketWidth = range / numOfBuckets;

  for (let i = 0; i < numOfBuckets; i++) {
    const bucketMin = min + bucketWidth * i;
    const bucketMax = min + bucketWidth * (i + 1);
    console.log(bucketMin, bucketMax);
    const guessesInBucket = guesses.filter(
      (value) => value >= bucketMin && value <= bucketMax
    );
    guessType.chartData.push({
      x: `${bucketMin} - ${bucketMax}`,
      y: guessesInBucket.length,
    });
  }
};
barChartData(lengths, 5);
console.log(lengths);
