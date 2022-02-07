import axios from "axios";
import getBaseUrl from "../hue/getBaseUrl.js";

export default class Light {

    constructor(id, apiObj){
        this.name = this.truncateApiName(apiObj.name);
        this.id = id;
    }

    truncateApiName(dirtyName){
        const cleanName = dirtyName.replace(/\s/g, '');
        return cleanName;
    }

    async getState(){
        const stateUrl = `${getBaseUrl()}/lights/${this.id}`;
        const data = await axios.get(stateUrl);
        return data.state;
    }

    dimOn(){
        this.getState((state) => {
            const url = `${getBaseUrl()}/lights/${this.id}/state`;
            const interval = Math.floor(state.bri / 10);
            for(let x = 0; x < 10; x++){
                setTimeout(() => {
                    axios.put(url, {
                        bri: (state.bri + interval * (x + 1))
                    })
                }, x * 400);
            }
            setTimeout(() => {
                //Clear rounding error
                axios.put(url, {
                    on: true
                })
            }, 400 * 10)
        })
    }

    dimOff(){
        this.getState((state) => {
            const url = `${getBaseUrl()}/lights/${this.id}/state`;
            const interval = Math.floor(state.bri / 10);
            for(let x = 0; x < 10; x++){
                setTimeout(() => {
                    axios.put(url, {
                        bri: (state.bri - interval * (x + 1))
                    })
                }, x * 400);
            }
            setTimeout(() => {
                //Clear rounding error
                axios.put(url, {
                    on: false
                })
            }, 400 * 10)
        })
    }

    on(){
        const url = `${getBaseUrl()}/lights/${this.id}/state`;
        axios.put(url, {
            on: true
        })
    }

    off(){
        const url = `${getBaseUrl()}/lights/${this.id}/state`;
        axios.put(url, {
            on: false
        })
    }

    blink(){
        this.getState((state) => {
            if(state.on == true){
                this.blinkIgnoreState();
            }
        })
    }

    blinkIgnoreState(){
        const url = `${getBaseUrl()}/lights/${this.id}/state`;
        for(let x = 0; x < 10; x++){
            setTimeout(() => {
                axios.put(url, {
                    on: x % 2 != 0
                })
            }, x * 200);
        }
    }

}