"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");
let configInstance = null;
function createConfig() {
    let configFile = path.join(__dirname, '../dev.env');
    if (!fs.existsSync(configFile)) {
        configFile = path.join(__dirname, '../prod.env');
    }
    configInstance = dotenv.parse(fs.readFileSync(configFile));
    return configInstance;
}
function getConfig() {
    if (!configInstance) {
        configInstance = createConfig();
    }
    return configInstance;
}
exports.getConfig = getConfig;
//# sourceMappingURL=config.js.map