import randomIntFromInterval from "./randomIntFromInterval.js";

/**
 * A function to transform the JSON data array and add whatever additional properties and data you want.
 * @param {Array} sanitizedInput The original array of JSON data containing objects.
 * @param {Array} sanitizedAdditions The new properties and data that you want to add to each object.
 * @param {Boolean} random A boolean value that if true will set the data on each array to only be one random piece of data from the array.
 * If the boolean value is false, the entire array will be returned.
 * @returns {String}
 */
export default function transformData(
  sanitizedInput,
  sanitizedAdditions,
  random
) {
  //Map function to create your new data object
  const transformedData = sanitizedInput.map((obj) => {
    //create a clone obj
    const newObj = { ...obj };
    //loop over each array and then assign new key/value pairs to the newObj
    //destructure each array to access the name to set as the key in the new obj
    //destructure data even further to directly access it
    sanitizedAdditions.forEach(([name, [...data]]) => {
      let randomNumber = randomIntFromInterval(0, data.length - 1);
      if (random) {
        newObj[name] = data[randomNumber];
      } else {
        newObj[name] = data;
      }
    });
    return newObj;
  });

  return JSON.stringify(transformedData);
}
