const storj = require('uplink-nodejs');
const libUplink = new storj.Uplink();

let config = new storj.Config();

let access = await libUplink.configRequestAccessWithPassphrase(config, satelliteURL, apiKey, encryptionPassphrase);

var permission = new storj.Permission(true, true, true, true, 0, 0);
var sharePrefix = storj.SharePrefix;
var sharePrefixListArray = [];
sharePrefix.bucket = 'tester';
sharePrefix.prefix = '';
sharePrefixListArray.push(sharePrefix);

let sharedAccess = await access.share(permission, sharePrefixListArray, 2);
