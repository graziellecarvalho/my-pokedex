const colors = require('colors');
const plopFolder = './utils/tools/plop';

const plopConfig = (plop) => {
	// COMPONENT generator
	plop.load(`${plopFolder}/generators/component.js`, {}, { generators: true });
	// LAYOUT generator
	plop.load(`${plopFolder}/generators/layout.js`, {}, { generators: true });
};

module.exports = plopConfig;
