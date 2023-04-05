const { satelliteURL, apiKey, encryptionPassphrase } = require('dotenv').config()?.parsed;
const accessKey =
	'1irthrqBYxCdRYg3RdPVum8uyuKXxMztd4D8M5cZk8x9rJwfN1kQQRXMrKioYfTcmfHd9T7c26aoPPPoQuR4TUzVZVZ7CDvuQpoZH1dM8GDMtsxE3hGFcphyyX8tyo79BM8YCTKASQ5iPpznsP65nYjzfVuoVArQs1kafh47DA7tLtzvuE9tCPeTHDd9CbkXy2KsE5iV7ybCXmJpCqyUAvVa3eUwEZbGc2Rbm5cRcWQvT1Nf8jcS8mnzyC5CZyi4wowQHpecMxKg7gnSg5jp1JB5RgStMdWqBBLkDjjeiD6TyaN83Try2zHu8K7chNoe1esvXb83aDGAKAmmN9deuckECATqt2ey2yYTTfa2X9f7jk46F9bP5T8VxZuoACetwFJ55RLD64j4tQQ7AkCGAiFzYLaxAahvrSmTGmpoMzL5BbxgKQTg5Y5g6EBaGijUboRniJfK9fejCtMrceUuxsVYdXxQkDjTZ';
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
