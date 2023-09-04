#!/usr/bin/env node

import meow from "meow";
import modifyJsonArrayImport from "../index.js";
const [modifyJsonAndReturnJson, modifyJsonAndReturnFile] =
  modifyJsonArrayImport();

const cli = meow(
  `
	Usage
	  $ jam -s <source> -d <data> -o <outputType> -r <random> -fn <fileName> -fp <filePath> 

	Options
	  --source, -s  Original source of data.
    --data, -s Data you want to add.
    --outputType -o Do you want json returned or a new .json file created? Accepts "json" & "file".
    --random, -r Do you want to randomise what data is added?
    --fileName, -fn, If you're creating a new file, choose a name. 
    --filePath, -fp, Enter a filepath where you'd like to create your file. Default is './'. 

	Examples
	  $ jam -s "../src/lib/mocks/input.json" -d "../src/lib/mocks/additions.json" -o "json"
	  JSON ARRAY EXAMPLE HERE
`,
  {
    importMeta: import.meta,
    flags: {
      source: {
        type: "string",
        shortFlag: "s",
        isRequired: (flags, input) => {
          if (flags.otherFlag) {
            return true;
          }
          return false;
        },
      },
      data: {
        type: "string",
        shortFlag: "d",
        isRequired: (flags, input) => {
          if (flags.otherFlag) {
            return true;
          }
          return false;
        },
      },
      outputType: {
        type: "string",
        shortFlag: "o",
        isRequired: (flags, input) => {
          if (flags.otherFlag) {
            return true;
          }
          return false;
        },
      },
      random: {
        type: "string",
        shortFlag: "r",
      },
      fileName: {
        type: "string",
        shortFlag: "fn",
      },
      filePath: {
        type: "string",
        shortFlag: "fp",
      },
    },
  }
);

console.log(cli.input);

// const source = cli.input.at(0);
// const data = cli.input.at(1);
// const outputType = cli.input.at(2);
// const random = cli.input.at(3);
// const fileName = cli.input.at(4);
// const filePath = cli.input.at(5);

// if (outputType === "json") {
//   const options = { random: random };
//   modifyJsonAndReturnJson(source, data, options);
// }

// if (outputType === "file") {
//   const options = {
//     random: random,
//     fileName: fileName,
//     fileSaveLocation: filePath,
//   };
//   modifyJsonAndReturnFile(source, data, options);
// }
