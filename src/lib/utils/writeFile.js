import * as fs from "fs";

/**
 * A function that uses Nodes FS library to write data to a file.
 * @param {String} fileName Name of the file.
 * @param {[]Object} fileData The data to write to the file.
 * @param {String} filePath The dir path to save the file.
 */
export default async function writeFile(
  fileName,
  fileData,
  filePath = "../data"
) {
  try {
    await fs.writeFile(`${filePath}/${fileName}.json`, fileData);
    return "File was successfully created.";
  } catch (error) {
    console.error(error);
    return "File failed to create.";
  }
}
