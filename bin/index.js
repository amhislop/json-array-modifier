#!/usr/bin/env node

import meow from "meow";
import modifyJsonArrayImport from "../index.js";
const [modifyJsonAndReturnJson, modifyJsonAndReturnFile] =
  modifyJsonArrayImport();

import * as fs from "fs";

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

const source = cli.unnormalizedFlags.source || cli.unnormalizedFlags.s;
const data = cli.unnormalizedFlags.data || cli.unnormalizedFlags.d;
const outputType = cli.unnormalizedFlags.outputType || cli.unnormalizedFlags.o;
const random = cli.unnormalizedFlags.random || cli.unnormalizedFlags.r;
const fileName = cli.unnormalizedFlags.fileName || cli.unnormalizedFlags.fn;
const filePath = cli.unnormalizedFlags.filePath || cli.unnormalizedFlags.fp;

console.log(source);

// Determine what the source type is (file or url).
const grabData = async (string) => {
  if (string.startsWith("http")) {
    try {
      const response = await fetch(string);
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      // readFileSync returns buffer if no encoding param passed.
      const data = fs.readFileSync(string, "utf-8");
      // convert from utf-8 to javascript
      return JSON.parse(data);
    } catch (err) {
      console.log(err);
    }
  }
};

// await our new data
// const sourceData = await grabData(source);
// const additionalData = await grabData(data);

// console.log({ sourceData });

// if (outputType === "json") {
//   const options = { random: random };
//   modifyJsonAndReturnJson(sourceData, additionalData, options);
// }

// if (outputType === "file") {
//   const options = {
//     random: random,
//     fileName: fileName,
//     fileSaveLocation: filePath,
//   };
//   modifyJsonAndReturnFile(sourceData, additionalData, options);
// }
