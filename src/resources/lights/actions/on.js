export default (lightEndpoint) => {
    return {
        url: lightEndpoint,
        params: {
            on: true
        },
        method: "put"
    }
}