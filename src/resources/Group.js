import _ from "lodash";
import Scene from "./Scenes.js"

export default class Group {

    //This is messy, but the Hue API does not return all
    //light data and scenes when just looking at that slice of state
    constructor(id, apiObj, allLights, allScenes){
        this.name = this.truncateApiName(apiObj.name);
        this.id = id;
        this.lights = this.filterLights(apiObj.lights, allLights);
        this.scenes = this.filterScenes(apiObj.lights, allScenes);
    }

    truncateApiName(dirtyName){
        const cleanName = dirtyName.replace(/\s/g, '');
        return cleanName;
    }

    filterLights(lightIds, allLights){
        const groupLights = [];
        for(const lightId of lightIds){
            for(const light of allLights){
                if(light.id == lightId){
                    groupLights.push(light);
                }
            }
        }
        return groupLights;
    }

    filterScenes(lightIds, allScenes){
        const groupScenes = [];
        for(const sceneKey in allScenes){
            const sceneObj = allScenes[sceneKey];
            if(this.id == sceneObj.group){
                if(_.isEqual(lightIds, sceneObj.lights)){
                    groupScenes.push(new Scene(allScenes, sceneKey));
                }
            }
        }
        return groupScenes;
    }

    toggleScene(sceneName){
        for(const scene of this.scenes){
            if(scene.name == sceneName){
                scene.toggle();
            }
        }
    }

    getSceneNames(){
        const names = [];
        for(const scene of this.scenes){
            names.push(scene.name);
        }
        return names;
    }

    dimOn(){
        for(const light of this.lights){
            light.dimOn();
        }
    }

    dimOff(){
        for(const light of this.lights){
            light.dimOff();
        }
    }

    on(){
        for(const light of this.lights){
            light.on();
        }
    }

    off(){
        for(const light of this.lights){
            light.off();
        }
    }

    blink(){
        for(const light of this.lights){
            light.blink();
        }
    }

    blinkIgnoreState(){
        for(const light of this.lights){
            light.blinkIgnoreState();
        }
    }

}