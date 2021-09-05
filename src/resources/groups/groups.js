import getAction from "../lights/actions.js";
import getScenes from "../scenes/scenes.js";
import getSceneActions from "../scenes/actions.js";
import _ from "lodash";

const getGroupKey = (group) => {
    const groupKey = group.name;
    const groupKeyParsed = groupKey.replace(/\s/g, "");
    return groupKeyParsed;
}

const getActions = (bridgeData, group) => {
    const lightIds = group.lights;
    const rawActions = [];
    const scenes = getScenes(bridgeData, group.id);
    const sceneActions = getSceneActions(scenes);
    for(const light of lightIds) {
        const lightActions = getAction(light);
        rawActions.push(lightActions);
    }
    let parsedActions = {
        on: [],
        off: [],
        blink: [],
        brightness: []
    };
    for(const action of rawActions){
        parsedActions = {
            on: [...action.on, ...parsedActions.on],
            off: [...action.off, ...parsedActions.off],
            blink: [...action.blink, ...parsedActions.blink],
            brightness: [...action.brightness, ...parsedActions.brightness],
            scenes: sceneActions
        }
    }
    return parsedActions;
}

export default (bridgeData) => {
    const rawGroupData = bridgeData.groups;
    const groupsParsed = [];
    for(const groupKey in rawGroupData){
        const group = rawGroupData[groupKey];
        group.id = groupKey;
        const groupKeyParsed = getGroupKey(group);
        groupsParsed.push({
            lightIds: group.lights,
            manufactuer: "Philips Hue",
            display: `Hue: ${group.name}`,
            id: groupKeyParsed,
            actions: getActions(bridgeData, group)
        });
    }
    return groupsParsed;
}