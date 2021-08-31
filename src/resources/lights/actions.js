import getBaseUrl from "../../hue/getBaseUrl.js";
import createOnObj from "./actions/on.js"
import createOffObj from "./actions/off.js";
import createBlinkArray from "./actions/blink.js";
import createBritObj from "./actions/brightness.js"

export default (light) => {
    const lightEndpoint = `${getBaseUrl()}/lights/${light}/state`

    return {
        on: [createOnObj(lightEndpoint)],
        off: [createOffObj(lightEndpoint)],
        brightness: [createBritObj(lightEndpoint)],
        blink: createBlinkArray(lightEndpoint)
    }
}