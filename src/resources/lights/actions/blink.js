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
            delay: 1000,
            condition: "state.on == true"
        },
        {
            url: lightEndpoint,
            params: {
                bri: 254
            },
            method: "put",
            delay: 2000,
            condition: "state.on == true"
        },
        {
            url: lightEndpoint,
            params: {
                bri: 0
            },
            method: "put",
            delay: 3000,
            condition: "state.on == true"
        },
        {
            url: lightEndpoint,
            params: {
                bri: 254
            },
            method: "put",
            delay: 4000,
            condition: "state.on == true"
        },
        {
            url: lightEndpoint,
            params: {
                bri: 0
            },
            method: "put",
            delay: 5000,
            condition: "state.on == true"
        },
        {
            url: lightEndpoint,
            params: {
                bri: 254
            },
            method: "put",
            delay: 6000,
            condition: "state.on == true"
        }
    ]
}