const { accessKey } = require('dotenv').config()?.parsed;
const storj = require('uplink-nodejs');

// setup
const libUplink = new storj.Uplink();

//  main function
async function main() {
	const access = await libUplink.parseAccess(accessKey);

	// project and bucket
	const project = await access.openProject();
	const listBucketsOptions = new storj.ListBucketsOptions();
	const { bucketList } = await project.listBuckets(listBucketsOptions);

	// show
	console.log({
		listBucketsOptions,
		bucketList,
	});
}

// exec
main();
