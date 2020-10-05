module.exports = {
	env: {
		node: true,
		es2020: true
	},
	extends: [
		"eslint:recommended",
		"standard"
	],
	parserOptions: {
		sourceType: "module"
		//ecmaVersion already gets set by env.es2020
	},
	
	rules: {
		"no-console": [ "off" ],

		indent: [ "error", 2, { "SwitchCase": 1 } ],
		"linebreak-style": [ "error", "unix" ],
		quotes: [ "error", "double" ],
		semi: [ "error", "never" ],
		"eol-last": [ "error", "always" ],
		"no-multiple-empty-lines": [ "error", { max: 2 } ],
	}
}
