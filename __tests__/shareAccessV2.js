const { serializedAccess } = require('dotenv').config()?.parsed;
const storj = require('uplink-nodejs');

// setup
const libUplink = new storj.Uplink();

//  main function
async function main() {
	// init access
	const access = await libUplink.parseAccess(serializedAccess);

	// workflow
	const permission = new storj.Permission(true, true, true, true, 0, 0);
	let sharePrefix = storj.SharePrefix;
	let sharePrefixListArray = [];
	sharePrefix.bucket = 'tester';
	sharePrefix.prefix = 'user01/';
	sharePrefixListArray.push(sharePrefix);

	// sharedAccess
	const sharedAccess = await access.share(permission, sharePrefixListArray, 1);
	const sharedAccessSerialized = await sharedAccess.serialize();

	// show
	console.log({
		sharePrefix,
		sharedAccessSerialized,
	});
}

// exec
main();
