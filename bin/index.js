import yargs, { argv } from "yargs";

// import modifyJsonArray from "../index.js";
// const [modifyJsonAndReturnJson, modifyJsonAndReturnFile] = modifyJsonArray();

const usage =
  "Usage: jam -s <source> -d <data> -o <outputType> -r <random> -fn <fileName> -fp <filePath> ";

const options = yargs
  .usage(usage)
  .option("s", {
    alias: "source",
    describe:
      "The source of JSON data that you want to modify. As a url or a dir pathway.",
    type: "string",
    demandOption: true,
  })
  .option("d", {
    alias: "data",
    describe: "The data you wish to add to each object within the array.",
    type: "string",
    demandOption: true,
  })
  .option("o", {
    alias: "outputType",
    describe: "Do you want JSON or a file returned.",
    type: "string",
    demandOption: true,
  })
  .option("r", {
    alias: "random",
    describe: "Randomise what data is appeended to each object.",
    type: "string",
    demandOption: false,
  })
  .option("fn", {
    alias: "fileName",
    describe: "If you are creating a new JSON file, name the file.",
    type: "string",
    demandOption: false,
  })
  .option("fp", {
    alias: "filePath",
    describe: "Choose where to create your new JSON file.",
    type: "string",
    demandOption: false,
  })
  .help(true).argv;

const source = argv.s || argv.source;
const data = argv.d || argv.data;
const outputType = argv.o || argv.outputType;
const random = argv.r || argv.random;
const fileName = argv.fn || argv.fileName;
const filePath = argv.fp || argv.filePath;

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
