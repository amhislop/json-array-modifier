import isJson from "./validateJSON.js";

/**
 * A function to ensure that the JSON data being passed is valid JSON.
 * @param {Array||Object} input An array or object containing JSON data.
 * @returns A valid javascript array or object to work with.
 */
export default function sanitizeInput(input) {
  try {
    if (isJson(input)) {
      if (Array.isArray(input)) {
        return JSON.parse(input);
      }
      return Object.entries(JSON.parse(input));
    } else {
      console.error("your input is not valid JSON.");
      return {};
    }
  } catch (error) {
    console.log(error);
  }
}
