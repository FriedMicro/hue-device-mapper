import fs from "fs";

const configRaw = fs.readFileSync(`./config/config.json`, {encoding: "utf-8"});
const config = JSON.parse(configRaw);
export default config;