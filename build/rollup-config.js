// Config file for running Rollup in "normal" mode (non-watch)

import rollupGitVersion from 'rollup-plugin-git-version'
import json from 'rollup-plugin-json'
import gitRev from 'git-rev-sync'
import pkg from '../package.json'

let {version} = pkg;
let release;

// Skip the git branch+rev in the banner when doing a release build
if (process.env.NODE_ENV === 'release') {
	release = true;
} else {
	release = false;
	const branch = gitRev.branch();
	const rev = gitRev.short();
	version += '+' + branch + '.' + rev;
}

const banner = `/* @preserve
 * Cartographer (forked Leaflet) ${version}, a JS library for interactive maps. http://maps.oopscommand.com/engine
 * (c) 2018 Pavel Kosilo and IntelligentMap contributors, (c) 2010-2018 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
`;

const outro = `var oldL = window.L;
exports.noConflict = function() {
	window.L = oldL;
	return this;
}

// Always export us to window global (see #2364)
window.L = exports;`;

export default {
	input: 'src/Cartographer.js',
	output: [
		{
			file: pkg.main,
			format: 'umd',
			name: 'L',
			banner: banner,
			outro: outro,
			sourcemap: true
		},
		{
			file: 'dist/cartographer-src.esm.js',
			format: 'es',
			banner: banner,
			sourcemap: true
		}
	],
	legacy: true, // Needed to create files loadable by IE8
	plugins: [
		release ? json() : rollupGitVersion()
	]
};
