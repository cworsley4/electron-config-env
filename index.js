"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");
class Config {
    constructor() {
        this.config = null;
        let configFile = path.join(process.cwd(), 'dev.env');
        if (!fs.existsSync(configFile)) {
            configFile = path.join(process.cwd(), 'prod.env');
            if (!fs.existsSync(configFile)) {
                throw new Error('No "prod.env" file found inside project root.');
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