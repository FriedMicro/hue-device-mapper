import getBaseUrl from "../../hue/getBaseUrl.js";

export default (lightId) => {

    const getData = (data) => {
        const light = data;
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
    };

    const lightEndpoint = `${getBaseUrl()}/lights/${lightId}`;
    return {
        url: lightEndpoint,
        method: "get",
        returnMap: getData.toString()
    }
}