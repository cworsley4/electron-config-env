"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");
let configInstance = null;
function createConfig() {
    let configFile = path.join(process.cwd(), 'dev.env');
    if (!fs.existsSync(configFile)) {
        configFile = path.join(process.cwd(), 'prod.env');
        if (!fs.existsSync(configFile)) {
            throw new Error('No "prod.env" file found inside project root.');
        }
    }
    configInstance = dotenv.parse(fs.readFileSync(configFile));
    return configInstance;
}
module.exports = () => {
    if (!configInstance) {
        configInstance = createConfig();
    }
    return configInstance;
};
//# sourceMappingURL=index.js.map