module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{png,json,xml,ico,html,txt,css,js,woff,woff2}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'build/sw.js'
};