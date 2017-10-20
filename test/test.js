"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const chai = require("chai");
const connfig = require("../index");
const expect = chai.expect;
const devEnvFile = path.join(process.cwd(), 'dev.env');
const devTestString = 'this is a dev config value';
const prodEnvFile = path.join(process.cwd(), 'prod.env');
const prodTestString = 'this is a dev config value';
describe('read *.env files (key/value)', () => {
    it('no prod.env => read dev.env', () => {
        fs.writeFileSync(devEnvFile, 'test="' + devTestString + '"');
        const conf = config();
        expect(conf.test).to.equal(devTestString);
        fs.unlink(devEnvFile);
    });
    it('no dev.env => read prod.env', () => {
        fs.writeFileSync(prodEnvFile, 'test="' + prodTestString + '"');
        const conf = config();
        expect(conf.test).to.equal(prodTestString);
        fs.unlink(prodEnvFile);
    });
    it('dev.env && prod.env => read dev.env', () => {
        fs.writeFileSync(devEnvFile, 'test="' + devTestString + '"');
        fs.writeFileSync(prodEnvFile, 'test="' + prodTestString + '"');
        const conf = config();
        expect(conf.test).to.equal(devTestString);
        fs.unlink(devEnvFile);
        fs.unlink(prodEnvFile);
    });
});
//# sourceMappingURL=test.js.map