import * as fs from "fs";
import colors from "colors";

/**
 * A function that uses Nodes FS library to write data to a file.
 * @param {String} fileName Name of the file.
 * @param {[]Object} fileData The data to write to the file.
 * @param {String} filePath The dir path to save the file.
 */
export default function writeFile(fileName, fileData, filePath = "./") {
  try {
    fs.writeFile(`${filePath}/${fileName}.json`, fileData, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(colors.rainbow("File was successfully created."));
      }
    });
  } catch (error) {
    console.log(error);
  }
}
