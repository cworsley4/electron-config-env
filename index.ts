import * as path from 'path';
import * as fs from 'fs';
import * as dotenv from 'dotenv';

// The module can be injected with a single config instance anywhere
let configInstance = null;

/**
 *  Creates a new config instance
 */
function createConfig() {

	let configFile = path.join(__dirname, '../dev.env');

	// the dev.env file will not be packaged with the app. So there will only be a prod.env file in production.
	if (!fs.existsSync(configFile)) {
		configFile = path.join(__dirname, '../prod.env');
		if (!fs.existsSync(configFile)) {
			throw new Error('No "prod.env" file found inside project root.');
		}
	}

	configInstance = dotenv.parse(fs.readFileSync(configFile));

	return configInstance;
}

/**
 * Returns a config instance
 * @returns {any} - a config instance
 */
module.exports = () => {
	if (!configInstance) {
		configInstance = createConfig();
	}
	return configInstance;
};
