import getBaseUrl from "../../hue/getBaseUrl.js";
import createOnObj from "./actions/on.js"
import createOffObj from "./actions/off.js";
import createBlinkArray from "./actions/blink.js";
import createBritObj from "./actions/brightness.js"
import getState from "./state.js";

export const deviceLightAction = (light) => {
    const lightEndpoint = `${getBaseUrl()}/lights/${light}/state`;
    return {
        on: [createOnObj(lightEndpoint)],
        off: [createOffObj(lightEndpoint)],
        brightness: [createBritObj(lightEndpoint)],
        blink: createBlinkArray(lightEndpoint)
    }
}

export const groupLightAction = (light) => {
    const lightEndpoint = `${getBaseUrl()}/lights/${light}/state`;
    return {
        on: addDeviceState(light, createOnObj(lightEndpoint)),
        off: addDeviceState(light, createOffObj(lightEndpoint)),
        brightness: addDeviceState(light, createBritObj(lightEndpoint)),
        blink: addDeviceState(light, createBlinkArray(lightEndpoint))
    }
}

const addDeviceState = (light, action) => {
    const deviceState = getState(light);
    if(Array.isArray(action)){
        const actionArray = [];
        console.log(action);
        for(const actionItem of action){
            actionArray.push({
                ...actionItem,
                ...{data: deviceState}
            })
        }
        return actionArray;
    } else {
        return [{
            ...action,
            ...{data: deviceState}
        }]
    }
}