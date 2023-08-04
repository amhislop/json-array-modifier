import data from "./<some-file>.json" assert { type: "json" };
import * as fs from "fs";

//Additional property to add
const possibleEligibilities = [
  "Two subjects at GCE A-Level or equivalent, plus passes at grade C or above.",
  "Two subjects at GCE A-Level or equivalent, plus passes at grade C or above in three subjects at GCSE level or equivalent",
  "Two subjects at GCE A-Level or equivalent, plus passes at grade C or above in three subjects at GCSE.",
  "Two subjects at GCE A-Level or equivalent, plus.",
];

//Additional property to add
const possibleFees = [
  "$34,950",
  "$50,975",
  "$67,845",
  "$26,959",
  "$40,652",
  "$72,100",
  "$10,405",
];

/**
 * A helper function to be used to access random index positions in your new property arrays.
 * @param {Integer} min Minimum number you want to begin at
 * @param {Integer} max Maximum number you want to hit
 * @returns {Integer}
 */
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Map function to create your new data object
const newData = data.map((obj) => {
  const rndEInt = randomIntFromInterval(1, 4);
  const randFInt = randomIntFromInterval(1, 7);
  return {
    ...obj,
    eligibility: possibleEligibilities[rndEInt],
    fees: possibleFees[randFInt],
  };
});

//Convert it to json
const printableJson = JSON.stringify(newData);

//Use Nodes built in fs to create new file with json output.
fs.writeFile("./newJsonData.json", printableJson, (err) => {
  if (err) {
    throw err;
  }
});
