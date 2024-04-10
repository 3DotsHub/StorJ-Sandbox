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
	const path = '5165017258208808/file01';
	const stat = await project.statObject('tester', path);
	const length = stat.system.content_length;

	const downloadOptions = new storj.DownloadOptions(0, length);
	const downloadBuffer = Buffer.alloc(length);
	const downloadHandle = await project.downloadObject('tester', path, downloadOptions);
	const downloadStatus = await downloadHandle.read(downloadBuffer, length);
	const downloadClosed = await downloadHandle.close();

	// show
	console.log({
		downloadOptions,
		downloadBuffer,
		downloadBufferString: downloadBuffer.toString(),
		downloadStatus,
		downloadClosed,
	});
}

// exec
main();
