const slugify = require('slugify');

const createComponent = (plop) => {
	// Component Generator
	plop.setGenerator('component', {
		description: 'Generate pokedex files for a new component template',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: `What is the component name?`,
				suffix: ' (separate words by dash or space)'.gray,
				validate: (input) => {
					const pattern = new RegExp(/^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ0-9-\s]+$/);
					const message = `Should contain only letters, digits and dashes, and must start with a letter`
						.red;
					return pattern.test(input) ? true : message;
				},
				filter: (input) => {
					return slugify(input, {
						lower: true,
						strict: true,
					});
				},
			},
		],
		actions: () => {
			const actions = [];

			// Index File
			actions.push({
				type: 'add',
				templateFile: '../templates/component/index.hbs',
				path: './components/{{ lowerCase name }}/index.ts',
			});

			// Component file
			actions.push({
				type: 'add',
				templateFile: '../templates/component/component.hbs',
				path: './components/{{ lowerCase name }}/{{ pascalCase name }}.tsx',
			});

			// Types file
			actions.push({
				type: 'add',
				templateFile: '../templates/component/types.hbs',
				path: './components/{{ lowerCase name }}/{{ pascalCase name }}.types.ts',
			});

			// Styled Component Styles file
			actions.push({
				type: 'add',
				templateFile: '../templates/component/styles.hbs',
				path: './components/{{ lowerCase name }}/{{ pascalCase name }}.style.ts',
			});

			return actions;
		},
	});
};

module.exports = createComponent;
