const path = require('path');

module.exports = {
	trailingSlash: true,
	basePath: '',
	eslint: {
		ignoreDuringBuilds: true,
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles/scss/core')],
	},
	images: {
		domains: ['raw.githubusercontent.com'],
	},
	webpack: (config, { isServer }) => {

		return config;
	},
};
