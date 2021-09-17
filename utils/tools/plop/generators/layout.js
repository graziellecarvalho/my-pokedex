const slugify = require('slugify');

const createLayout = (plop) => {
	plop.setGenerator('layout', {
		description: 'Generate pokedex files for a new layout template',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: `What is the layout name?`,
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
			{
				type: 'confirm',
				name: 'isPageLayout',
				message: `Is it for a route of type ${'page'.magenta}?`,
				suffix: ' (Should match a template from the CMS)'.gray,
			},
		],
		actions: (data) => {
			const actions = [];

			// Index file
			actions.push({
				type: 'add',
				templateFile: '../templates/layout/index.hbs',
				path: './layouts/{{ lowerCase name }}/index.ts',
			});

			// Component file
			actions.push({
				type: 'add',
				templateFile: '../templates/layout/layout.hbs',
				path: './layouts/{{ lowerCase name }}/{{ pascalCase name }}Layout.tsx',
			});

			// Styles file
			actions.push({
				type: 'add',
				templateFile: '../templates/layout/styles.hbs',
				path: './layouts/{{ lowerCase name }}/{{ pascalCase name }}Layout.styles.ts',
			});

			// Types file
			actions.push({
				type: 'add',
				templateFile: '../templates/layout/types.hbs',
				path: './layouts/{{ lowerCase name }}/{{ pascalCase name }}Layout.types.ts',
			});

			// Mappings file
			actions.push({
				type: 'add',
				templateFile: '../templates/layout/mapping.hbs',
				path: './utils/mappings/{{ kebabCase name }}.ts',
			});

			// Import the layout in the [...page] file
			actions.push({
				type: 'modify',
				pattern: /(\/\/\sLayouts.*(\nimport\s.*)*?;)/i,
				templateFile: '../templates/layout/pages-import.hbs',
				path: './pages/[...page].tsx',
			});
			actions.push({
				type: 'modify',
				pattern: /(([\s][^\n])+default:)/,
				templateFile: '../templates/layout/pages-return.hbs',
				path: './pages/[...page].tsx',
			});

			// Add the layout props as type option for the RouteProps content property
			actions.push({
				type: 'modify',
				pattern: /((\n?import\s.*)*?;)/i,
				templateFile: '../templates/layout/props-import.hbs',
				path: './utils/typings/RouteProps.ts',
			});
			actions.push({
				type: 'modify',
				pattern: /(\|\s{};)/,
				templateFile: '../templates/layout/props-type.hbs',
				path: './utils/typings/RouteProps.ts',
			});

			// Add the option in the page data mapping switch
			if (data.isPageLayout) {
				actions.push({
					type: 'modify',
					pattern: /((\n?import\s.*)*?;)/i,
					templateFile: '../templates/layout/route-import.hbs',
					path: './utils/mappings/route.ts',
				});
				actions.push({
					type: 'modify',
					pattern: /(([\s][^\n])+\/\/\sPLOP\sPLACEHOLDER[^\n]*)/i,
					templateFile: '../templates/layout/route-return.hbs',
					path: './utils/mappings/route.ts',
				});
			}

			return actions;
		},
	});
};

module.exports = createLayout;
