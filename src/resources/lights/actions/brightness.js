//paramFunc is a function used to modify params; it's injected into code generation

export default (lightEndpoint) => {

    const calcFunc = (params) => {
        const brit = params.brit;
        const hueBrit = Math.round(brit * (254 / 100));
        params.brit = hueBrit;
        return params;
    }

    return {
        url: lightEndpoint,
        params: {
            on: true,
            brit: "params.brit"
        },
        method: "put",
        paramFunc: calcFunc.toString()
    }
}