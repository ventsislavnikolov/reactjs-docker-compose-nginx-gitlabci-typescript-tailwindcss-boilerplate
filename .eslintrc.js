module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
		node: true,
	},
	extends: [
		'prettier',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:security/recommended',
		'plugin:react-hooks/recommended',
	],
	plugins: ['react', 'prettier', 'jsx-a11y', 'react-hooks'],
	rules: {
		semi: ['error', 'always'],
		eqeqeq: ['error', 'smart'],
		quotes: ['error', 'single'],
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1,
			},
		],
		'prettier/prettier': [
			'error',
			{
				useTabs: true,
				endOfLine: 'auto',
				singleQuote: true,
				parser: 'flow',
			},
		],
		'jsx-a11y/anchor-is-valid': [
			'error',
			{
				components: ['Link'],
				specialLink: ['hrefLeft', 'hrefRight'],
				aspects: ['invalidHref', 'preferButton'],
			},
		],
		'react/react-in-jsx-scope': 0, // Using React v17 we don't need to import React in every file.
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
