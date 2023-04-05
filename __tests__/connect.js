const { satelliteURL, apiKey, encryptionPassphrase } = require('dotenv').config()?.parsed;
const storj = require('uplink-nodejs');

// setup
const libUplink = new storj.Uplink();
let config = new storj.Config();

// init access
libUplink
	.configRequestAccessWithPassphrase(config, satelliteURL, apiKey, encryptionPassphrase)
	.then(console.log)
	.catch(console.error);
