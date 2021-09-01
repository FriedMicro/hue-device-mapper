import getBaseUrl from "../../hue/getBaseUrl.js";

export default (lightId) => {
    const lightEndpoint = `${getBaseUrl()}/lights/${lightId}`;
    return {
        url: lightEndpoint,
        method: "get",
        returnMap: `(data) => {
            const light = data.response;
            return {
                state: {
                    on: light.state.on,
                    bri: light.state.bri,
                    hue: light.state.hue,
                    sat: light.state.sat,
                    reachable: light.state.reachable
                },
                id: lightId,
                product: light.productname,
                supportsColor: light.state.hue ? true : false
            }
        }`
    }
}