//State will be accessible from templating engine at runtime; condition is the validation key

export default (lightEndpoint) => {
    return [
        {
            url: lightEndpoint,
            params: {
                bri: 254
            },
            method: "put",
            condition: "state.on == true"
        },
        {
            url: lightEndpoint,
            params: {
                bri: 0
            },
            method: "put",
            delay: 100,
            condition: "state.on == true"
        },
        {
            url: lightEndpoint,
            params: {
                bri: 254
            },
            method: "put",
            delay: 200,
            condition: "state.on == true"
        },
        {
            url: lightEndpoint,
            params: {
                bri: 0
            },
            method: "put",
            delay: 300,
            condition: "state.on == true"
        },
        {
            url: lightEndpoint,
            params: {
                bri: 254
            },
            method: "put",
            delay: 400,
            condition: "state.on == true"
        },
        {
            url: lightEndpoint,
            params: {
                bri: 0
            },
            method: "put",
            delay: 500,
            condition: "state.on == true"
        }
    ]
}