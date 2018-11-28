"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const dotenv = require("dotenv");
const finder = require("fs-finder");
class Config {
    constructor() {
        this.config = null;
        let configFile = finder.from(process.cwd()).findFiles('dev.env')[0];
        if (!fs.existsSync(configFile) || process.env.NODE_ENV === 'production') {
            configFile = finder.from(process.cwd()).findFiles('prod.env')[0];
            if (!fs.existsSync(configFile)) {
                throw new Error('No "prod.env" file found inside project.');
            }
        }
        this.config = dotenv.parse(fs.readFileSync(configFile));
    }
    static get Instance() {
        return this.instance || (this.instance = new this());
    }
    static get config() { return this.config; }
}
Config.instance = null;
exports.Config = Config;
exports.config = Config.Instance.config;
//# sourceMappingURL=index.js.map
