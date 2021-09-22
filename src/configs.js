export default [
	'root',
	'author',
	'content',
	'access',
	'allowIntent',
	'allowNavigation',
	'preference',
	'feature',
	'icon',
	'splash',
	'platform',
	'engine',
	'plugin',
	'hook',
	'configFile',
  'editConfig'
].map((config) => require('./configs/'+config));
