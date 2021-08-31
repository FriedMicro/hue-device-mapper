import axios from "axios";
import fs from "fs";
import getBaseUrl from "./hue/getBaseUrl.js";
import getLights from "./resources/lights/lights.js";
import getGroups from "./resources/groups/groups.js"

const baseUrl = getBaseUrl();
const getBridgeData = ()=> {
    return new Promise((resolve, reject) => {
        axios.get(baseUrl).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            console.error(err);
        })
    })
}

const main = () => {
    getBridgeData().then((data) => {
        const hue = {
            lights: getLights(data),
            groups: getGroups(data)
        }
        fs.writeFileSync("hue.json", JSON.stringify(hue));
    });
}

main();