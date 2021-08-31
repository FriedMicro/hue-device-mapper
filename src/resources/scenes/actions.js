import set from "./actions/set.js";

export default (scenes) => {
    // console.log(scenes);
    const sceneObjs = {};
    for(const sceneKey in scenes){
        const scene = scenes[sceneKey];
        sceneObjs[sceneKey] = {on: set(scene)};
    }
    return sceneObjs;
}