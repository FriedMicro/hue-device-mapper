import axios from "axios";
import getBaseUrl from "./hue/getBaseUrl.js";
import fs from "fs";
import resources from "./resources/index.js";

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
        // console.log(data);
        // const hue = {
        //     lights: getLights(data),
        //     // groups: getGroups(data)
        // }
        const hueResources = resources(data);
        console.log(hueResources);
        fs.writeFileSync("hue.json", JSON.stringify(hueResources));
    });
}

main();