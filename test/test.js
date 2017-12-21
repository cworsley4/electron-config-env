"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const chai = require("chai");
const index_1 = require("../index");
const expect = chai.expect;
const devEnvFile = path.join(process.cwd(), 'dev.env');
const devTestString = 'this is a dev config value';
const prodEnvFile = path.join(process.cwd(), 'prod.env');
const prodTestString = 'this is a prod config value';
describe('read *.env files (key/value)', () => {
    it('no prod.env => read dev.env', () => {
        fs.writeFileSync(devEnvFile, 'test="' + devTestString + '"');
        expect(index_1.config.test).to.equal(devTestString);
        fs.unlink(devEnvFile, () => console.log);
    });
    it('no dev.env => read prod.env', () => {
        fs.writeFileSync(prodEnvFile, 'test="' + prodTestString + '"');
        expect(index_1.config.test).to.equal(prodTestString);
        fs.unlink(prodEnvFile, () => console.log);
    });
    it('dev.env && prod.env => read dev.env', () => {
        fs.writeFileSync(devEnvFile, 'test="' + devTestString + '"');
        fs.writeFileSync(prodEnvFile, 'test="' + prodTestString + '"');
        expect(index_1.config.test).to.equal(devTestString);
        fs.unlink(devEnvFile, () => console.log);
        fs.unlink(prodEnvFile, () => console.log);
    });
});
//# sourceMappingURL=test.js.map