import config from "../config/index.js";
export default () => {
    const baseUrl = `http://${config.ip}/api/${config.userid}`;
    return baseUrl;
}
