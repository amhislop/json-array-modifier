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
    return sanitizedAdditions.map(([arrName, arrData]) => {
      const newObj = {
        ...obj,
        [arrName]: random
          ? arrData[randomIntFromInterval(data.length)]
          : arrData,
      };
      return newObj;
    });
  });

  return JSON.stringify(transformedData);
}
