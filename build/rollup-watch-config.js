// Config file for running Rollup in "watch" mode
// This adds a sanity check to help ourselves to run 'rollup -w' as needed.

import rollupGitVersion from 'rollup-plugin-git-version'
import gitRev from 'git-rev-sync'

const branch = gitRev.branch();
const rev = gitRev.short();
const version = require('../package.json').version + '+' + branch + '.' + rev;
const banner = `/* @preserve
 * Cartographer (forked Leaflet) ${version}, a JS library for interactive maps. http://maps.oopscommand.com/engine
 * (c) 2018 Pavel Kosilo and IntelligentMap contributors, (c) 2010-2018 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
`;

export default {
	input: 'src/Cartographer.js',
	output: {
		file: 'dist/cartographer-src.js',
		format: 'umd',
		name: 'Cartographer',
		banner: banner,
		sourcemap: true
	},
	legacy: true, // Needed to create files loadable by IE8
	plugins: [
		rollupGitVersion()
	]
};
