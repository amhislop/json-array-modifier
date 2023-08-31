import builder from "./src/main.js";

export default function modifyJsonArray() {
  const [modifyJsonAndReturnJson, modifyJsonAndReturnFile] = builder();
  return [modifyJsonAndReturnJson, modifyJsonAndReturnFile];
}
