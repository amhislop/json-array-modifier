import build from "./src/main.js";

/**
 * A helper function for developers who need to update a large JSON Array or file by adding additional properties with values.
 * A use case for this is that you need to mock up data for an endpoint, and further down the line make additions to each object in the JSON array.
 * @param {String|Object} input The original data source that you want to transform.
 * @param {Object} additions The data you'd like to add to the original data. An example of the accepted structute is above.
 * The names that are used as keys will also be used as the new properties being added to the object.
 * @param {Boolean} random A boolean value that if true will set the data on each array to only be one random piece of data from the array.
 * If the boolean value is false, the entire array will be returned.
 * @param {String} fileName The file name for your newly generated file.
 * @param {String} dataType The type of data the user wants to get returned. Accepts either "file" or "json" and returns a file or a JSON string.
 * @param {String} fileSaveLocation The location where the user would like the file to be saved.
 */
export default function generateNewJsonArray(
  input,
  additions,
  random,
  fileName,
  dataType,
  fileSaveLocation
) {
  return build(input, additions, random, fileName, dataType, fileSaveLocation);
}
