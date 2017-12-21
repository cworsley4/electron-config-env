import * as fs from 'fs';
import * as dotenv from 'dotenv';
import * as finder from 'fs-finder';

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

		let configFile = finder.from(process.cwd()).findFiles('dev.env')[0];

		// the dev.env file will not be packaged with the app. So there will only be a prod.env file in production.
		if (!fs.existsSync(configFile)) {
			configFile = finder.from(process.cwd()).findFiles('prod.env')[0];
			if (!fs.existsSync(configFile)) {
				throw new Error('No "prod.env" file found inside project.');
			}
		}

		this.config = dotenv.parse(fs.readFileSync(configFile));
	}

}

export const config: any = Config.Instance.config;
