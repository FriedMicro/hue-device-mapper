import axios from "axios";
import getBaseUrl from "../hue/getBaseUrl.js";

export default class Scene {

    constructor(fullApiObj, sceneKey){
        const apiObj = fullApiObj[sceneKey];
        this.name = this.truncateApiName(apiObj.name);
        this.id = sceneKey;
        this.group = apiObj.group;
    }

    truncateApiName(dirtyName){
        const cleanName = dirtyName.replace(/\s/g, '_');
        const snakeCaseName = cleanName.toLowerCase();
        return snakeCaseName;
    }

    toggle(){
        const actionUrl = `${getBaseUrl()}/groups/${this.group}/action`;
        axios.put(actionUrl, {
            scene: this.id
        })
    }

}