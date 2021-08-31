//paramFunc is a function used to modify params; it's injected into code generation

export default (lightEndpoint) => {
    return {
        url: lightEndpoint,
        params: {
            on: true,
            brit: "params.brit"
        },
        method: "put",
        paramFunc: (params) => {
            const brit = params.brit;
            //Hue takes up to 254
            const hueBrit = Math.round(brit * (254 / 100));
            params.brit = hueBrit;
            return params;
        }
    }
}