import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(eslintPluginPrettierRecommended);

module.exports = {
	extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': 'error',
		'vue/multi-word-component-names': 'off',
	},
};
