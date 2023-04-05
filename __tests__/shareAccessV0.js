const { satelliteURL, apiKey, encryptionPassphrase, serializedAccess } = require('dotenv').config()?.parsed;
const storj = require('uplink-nodejs');

// setup
const libUplink = new storj.Uplink();
let config = new storj.Config();

//  main function
async function main() {
	// init access
	const access = await libUplink.parseAccess(serializedAccess);

	// workflow
	const permission = new storj.Permission(true, true, true, true, 0, 0);
	let sharePrefix = storj.SharePrefix;
	let sharePrefixListArray = [];
	sharePrefix.bucket = 'tester';
	sharePrefix.prefix = 'user01';
	sharePrefixListArray.push(sharePrefix);

	// sharedAccess
	const sharedAccess = await access.share(permission, sharePrefixListArray, 1);
	const sharedAccessSerialized = await sharedAccess.serialize();

	console.log({
		sharedAccess,
		sharedAccessSerialized,
	});

	//
	const parsedSharedAccess = await libUplink.parseAccess(sharedAccessSerialized);
	const parsedSharedProject = await parsedSharedAccess.openProject();

	const encryptionKey = (await libUplink.uplinkDeriveEncryptionKey('newpassword', [1, 2, 3]))?.encryption_key;
	await parsedSharedAccess.overrideEncryptionKey('tester', 'user01/', encryptionKey);

	const s = await parsedSharedAccess.serialize();
	console.log(s);

	return;

	const project = await sharedAccess.openProject();
	const listBucketsOptions = new storj.ListBucketsOptions();
	const { bucketList } = await project.listBuckets(listBucketsOptions);

	// show
	console.log({
		permission,
		sharePrefix,
		sharedAccess,
		bucketList,
	});
}

// exec
main();
