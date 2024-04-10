const { accessKey } = require('dotenv').config()?.parsed;
const storj = require('uplink-nodejs');

// setup
const libUplink = new storj.Uplink();

//  main function
async function main() {
	// init access
	const access = await libUplink.parseAccess(accessKey);
	const encryptionKey = (
		await libUplink.uplinkDeriveEncryptionKey('newpassword', [Math.random(), Math.random(), Math.random()])
	)?.encryption_key;
	await access.overrideEncryptionKey('tester', '5165017258208808/', encryptionKey);

	// project and bucket
	const project = await access.openProject();
	const listObjectsOptions = new storj.ListObjectsOptions('5165017258208808/', '', true, true, true);
	const list = await project.listObjects('tester', listObjectsOptions);

	// show
	console.log({
		listObjectsOptions,
		list,
	});
}

// exec
main();
