import getBaseUrl from "../../../hue/getBaseUrl.js";

export default (scene) => {
    const sceneEndpoint = `${getBaseUrl()}/groups/${scene.group}/action`

    return {
        url: sceneEndpoint,
        params: {
            on: true,
            scene: scene.id
        },
        method: "put"
    }

}