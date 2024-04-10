const storj = require('uplink-nodejs');
const { accessKey } = require('dotenv').config()?.parsed;
const bucket = 'tester';
const prefix = '5165017258208808/';

// setup
const libUplink = new storj.Uplink();

//  main function
async function main() {
	// init access
	const access = await libUplink.parseAccess(accessKey);
	const encryptionKey = (
		await libUplink.uplinkDeriveEncryptionKey('newpassword', [Math.random(), Math.random(), Math.random()])
	)?.encryption_key;
	await access.overrideEncryptionKey(bucket, prefix, encryptionKey);

	// project and bucket
	const project = await access.openProject();
	const uploadOptions = new storj.UploadOptions();
	const upload = await project.uploadObject(bucket, prefix + 'file01', uploadOptions);

	// upload
	// const message = Buffer.from('Hi from nodejs');
	const message = Buffer.from(
		JSON.stringify({
			name: 'Johnny',
			message: 'Hi, from the inside',
		})
	);
	const uploadWrite = await upload.write(message, message.byteLength).catch(console.log);
	const uploadCommit = await upload.commit();

	// show
	console.log({
		uploadOptions,
		uploadWrite,
		uploadCommit,
	});
}

// exec
main();
