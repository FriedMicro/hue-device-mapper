//paramFunc is a function used to modify params; it's injected into code generation

export default (lightEndpoint) => {

    const calcFunc = (params) => {
        const brit = params.brit;
        const hueBrit = Math.round(brit * (254 / 100));
        params.bri = hueBrit;
        return params;
    }

    return {
        url: lightEndpoint,
        params: {
            on: true,
            bri: "params.bri"
        },
        method: "put",
        paramFunc: calcFunc.toString()
    }
}