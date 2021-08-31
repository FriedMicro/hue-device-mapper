const getSceneKey = (scene) => {
    const sceneKey = scene.name;
    const sceneKeyParsed = sceneKey.replace(/\s/g, "");
    return sceneKeyParsed;
}

export default (bridgeData, groupId) => {
    const rawSceneData = bridgeData.scenes;
    const scenesParsed = {};
    for(const sceneKeyRaw in rawSceneData){
        const scene = rawSceneData[sceneKeyRaw];
        if(scene.group != groupId){
            continue;
        }
        const sceneKey = getSceneKey(scene)
        scenesParsed[sceneKey] = {
            id: sceneKeyRaw,
            group: groupId
        }
    }
    return scenesParsed;
}