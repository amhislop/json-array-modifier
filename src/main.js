import sanitizeData from "./lib/utils/sanitizeInput.js";
import transformData from "./lib/utils/transformData.js";
import writeFile from "./lib/utils/writeFile.js";

/**
 * @param {String|Object} input The original data source that you want to transform.
 * @param {Object} additions The data you'd like to add to the original data. An example of the accepted structute is above.
 * The names that are used as keys will also be used as the new properties being added to the object.
 * @param {Boolean} random A boolean value that if true will set the data on each array to only be one random piece of data from the array.
 * If the boolean value is false, the entire array will be returned.
 * @param {String} fileName The file name for your newly generated file.
 * @param {String} dataType The type of data the user wants to get returned. Accepts either "file" or "json" and returns a file or a JSON string.
 * @param {String} fileSaveLocation The location where the user would like the file to be saved.
 */
export default function newJSONOutput(
  input,
  additions,
  random = false,
  fileName,
  dataType,
  fileSaveLocation
) {
  try {
    const sanitizedInput = sanitizeData(input);
    const sanitizedAdditions = sanitizeData(additions);
    const transformedData = transformData(
      sanitizedInput,
      sanitizedAdditions,
      random
    );

    if (dataType === "file") {
      const write = writeFile(fileName, transformedData, fileSaveLocation);
      console.log(write);
    }

    if (dataType === "json") {
      return transformedData;
    }
  } catch (error) {
    console.error(error);
  }
}
