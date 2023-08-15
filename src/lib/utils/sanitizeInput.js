import isJson from "./validateJSON";

export default async function sanitizeInput(input) {
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
