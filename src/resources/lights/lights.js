import actions from "./actions.js"

//remove v2, v3, etc
const cleanVersioning = (name) => {
    for(let i = 0; i < 100; i++){
        const replaceKeyUpper = `V${i}`
        name = name.split(replaceKeyUpper)[0]
        const replaceKeyLower = `v${i}`
        name = name.split(replaceKeyLower)[0]
    }
    return name;
}

const getLightKey = (light) => {
    const lightKeyRaw = light.name;
    const lightKeyCleaned = cleanVersioning(lightKeyRaw);
    const lightKeyParsed = lightKeyCleaned.replace(/\s/g, "");
    return lightKeyParsed;
}

export default (bridgeData) => {
    const rawLightData = bridgeData.lights;
    const lightsParsed = {};
    for(const lightKey in rawLightData){
        const light = rawLightData[lightKey];
        const lightKeyParsed = getLightKey(light);
        lightsParsed[lightKeyParsed] = {
            state: {
                on: light.state.on,
                bri: light.state.bri,
                hue: light.state.hue,
                sat: light.state.sat,
                reachable: light.state.reachable
            },
            actions: actions(lightKey),
            id: lightKey,
            product: light.productname,
            supportsColor: light.state.hue ? true : false
        }
    }
    return lightsParsed;
}