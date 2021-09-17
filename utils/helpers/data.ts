import { Config } from 'config/site';

/**
 * Check if the api base path is defined in the environment variables
 */
export function checkApiPaths() {
	if (!Config.apiBaseUrl) {
		throw new Error(
			`API base URL not defined on .env.local file.\nCheck the README.md file for more details on this setup.`,
		);
	}
}
