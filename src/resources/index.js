import Group from "./Group.js";
import Light from "./Light.js";

export default (apiObj) => {
    const lightApiObj = apiObj.lights;
    const groupApiObj = apiObj.groups;
    const scenesApiObj = apiObj.scenes;

    const lights = buildLights(lightApiObj);
    const groups = buildGroup(groupApiObj, lights, scenesApiObj);

    return {
        lights: lights,
        groups: groups
    }
}

const buildLights = (lightApiObj) => {
    const lights = [];
    for(const lightKey in lightApiObj){
        const apiLight = lightApiObj[lightKey];
        const light = new Light(lightKey, apiLight);
        lights.push(light);
    }
    return lights;
}

const buildGroup = (groupApiObj, allLights, scenesApi) => {
    const groups = [];
    for(const groupKey in groupApiObj){
        const apiGroup = groupApiObj[groupKey];
        const group = new Group(groupKey, apiGroup, allLights, scenesApi);
        groups.push(group);
    }
    return groups;
}