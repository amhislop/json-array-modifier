import {
  returnJson as modifyJsonAndReturnJson,
  returnNewFile as modifyJsonAndReturnFile,
} from "./lib/utils/main.js";

export default function builder() {
  return [modifyJsonAndReturnJson, modifyJsonAndReturnFile];
}
