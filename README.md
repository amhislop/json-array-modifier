# JSON Array Modifier

**A package to add additional properties to every object in a JSON array and return a new JSON file or string.**

---

This started out as a single script and I saw the potential to flesh it out and break it apart to use as my first NPM package.

There are zero dependencies here, it is just a series of JS files that take in your original data, alongside an object containing the desired keys and values you want to add to each object in your initial array.

There are examples of the JSON data that the function expects under the `/src/lib/mocks` dir.

## Documentation

### Syntax
```ts
generateNewJsonArray(input, additions, random, filename, dataType, fileSaveLocation);
```
### Parameters
`input`  

  This defines the resource of which you wish to modify. This can either be

  - A string path to a JSON file
  - An [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of objects

`additions`
  
  An object containing the keys and values what you wish added to each object.

`random` (_optional_)

  A [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) flag that lets you decide if you want to randomise what value is added to each object per property. Default is set to `false`.
  
`filename`

  The name of the file you'd like to create.

`dataType`

  If you would like to create a file or get a JSON string returned. Accepts `file` or `json`.

`fileSaveLocation` (_optional_)

  If you wish to create a file, where would you want the file to be created. Default is `./`.

### Return value

The return value is dependent on the value of the `dataType` argument passed in. Below are the return values according to their type.
  - `file` - Void
  - `json` - An array with the modified objects.

### Example

This package is only built for use with ESM compatiable projects. Therefore use ESM syntax:

```js
import generateNewJsonArray from "json-array-modifier";
import input from "./mocks/mockInput.json" assert { type: "json" };
import additions from "./mocks/mockAdditions.json" assert { type: "json" };

const newJSON = generateNewJsonArray(input, additions, true, "testNewFile", "file")

console.log(newJSON);
```
