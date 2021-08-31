export default (lightEndpoint) => {
    return {
        url: lightEndpoint,
        params: {
            on: false
        },
        method: "put"
    }
}