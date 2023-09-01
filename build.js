import * as fs from 'fs';
import { copySync } from 'fs-extra/esm';

console.info('Starting build...');
setTimeout(() => {
	console.info('Copying files...');
	if(!fs.existsSync('./dist')) {
		fs.mkdirSync('./dist');
	}
	copySync('./source', './dist');
}, 2000);

setTimeout(() => {
	console.info('Build finished successfully!');
}, 4000);
