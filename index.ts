import * as path from 'path';
import * as fs from 'fs';
import * as dotenv from 'dotenv';

export class Config {

	private static instance = null;

	private config = null;

	public static get Instance() {
		return this.instance || (this.instance = new this());
	}
	public static get config() { return this.config; }

	/**
	 *  Creates a new config instance
	 */
	private constructor() {

		let configFile = path.join(process.cwd(), 'dev.env');

		// the dev.env file will not be packaged with the app. So there will only be a prod.env file in production.
		if (!fs.existsSync(configFile)) {
			configFile = path.join(process.cwd(), 'prod.env');
			if (!fs.existsSync(configFile)) {
				throw new Error('No "prod.env" file found inside project root.');
			}
		}

		this.config = dotenv.parse(fs.readFileSync(configFile));
	}

}

export const config: any = Config.Instance.config;
