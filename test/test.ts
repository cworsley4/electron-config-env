import * as fs     from 'fs';
import * as path   from 'path';
import * as chai   from 'chai';
import {config}    from '../index';

const expect         = chai.expect;
const devEnvFile     = path.join(process.cwd(), 'dev.env');
const devTestString  = 'this is a dev config value';
const prodEnvFile    = path.join(process.cwd(), 'prod.env');
const prodTestString = 'this is a prod config value';

describe('read *.env files (key/value)', () => {
	it('no prod.env => read dev.env', () => {
		fs.writeFileSync(devEnvFile, 'test="' + devTestString + '"');
		expect(config.test).to.equal(devTestString);
		fs.unlink(devEnvFile, () => console.log);
	});
	it('no dev.env => read prod.env', () => {
		fs.writeFileSync(prodEnvFile, 'test="' + prodTestString + '"');
		expect(config.test).to.equal(prodTestString);
		fs.unlink(prodEnvFile, () => console.log);
	});
	it('dev.env && prod.env => read dev.env', () => {
		fs.writeFileSync(devEnvFile, 'test="' + devTestString + '"');
		fs.writeFileSync(prodEnvFile, 'test="' + prodTestString + '"');
		expect(config.test).to.equal(devTestString);
		fs.unlink(devEnvFile, () => console.log);
		fs.unlink(prodEnvFile, () => console.log);
	});
});
