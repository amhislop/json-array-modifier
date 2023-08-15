// This function returns one of two possible options
// 1. url path in local to new File
// 2. new JSON data stringifed

import build from "./src/main.js";

export default function newJSONOutput(
  input,
  additions,
  random,
  fileName,
  dataType,
  fileSaveLocation
) {
  return build(input, additions, random, fileName, dataType, fileSaveLocation);
}
