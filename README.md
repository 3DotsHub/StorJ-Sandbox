# Description

This Git project hosts multiple StorJ (Decentralized Storage Network) Research Scripts! This collection hosts scripts tailored for interacting with the StorJ network as a client, facilitating research, analysis, and experimentation.

# Features:

-   Access Connector
-   Listing buckets and objects
-   Read Write buckets and objects
-   Stats

# Installation

```bash
$ npm install
```

# Building the Package

download the source project
$ git clone https://github.com/storj-thirdparty/uplink-nodejs.git
after changing the source code, build it
$ npm run preinstall
$ export DYLD_LIBRARY_PATH=$DYLD_LIBRARY_PATH:$PWD/node_modules/uplink-nodejs/

## Upgrade node-gyp internally

```
npm install node-gyp@latest [worked]

sudo npm explore npm/node_modules/@npmcli/run-script -g -- npm_config_global=false npm install node-gyp@latest
```

## Testing the Results

The source project includes testing script to test it locally.

need to build and release the binaries to root directory of the project
$ npm install
creat secret.txt in root directory of project and input api key getting from access panel whiling creating Access Grant in storj.io
In /test/testcase.js, change the satelliteURL with the information getting from access panel whiling creating Access Grant in storj.io
run the test
$ npm test

## Copying package

Copy uplink git folder with installed features into project root folder (package.json >> "uplink-nodejs": "file:./uplink-nodejs")
or
Copy uplink git folder with installed features into node_module folder (apply changes in package.json)

# Environment

```
// check out scripts

satelliteURL='xxx@us1.storj.io:7777'
apiKey='xxx'
encryptionPassphrase='xxx'
serializedAccess='xxx'


s3Key="xxx"
s3Pass="xxx"
s3Host="https://gateway.storjshare.io"
```

## Support

Thanks for supporting us.

# Disclaimer: Research and Proof of Concept Development

This repository is dedicated to research and proof of concept (PoC) development purposes. The materials contained herein may include experimental code, documentation, datasets, and other resources aimed at exploring novel ideas, technologies, or methodologies. It is important to understand the following:

### Experimental Nature:

The contents of this repository are experimental and may not be suitable for production use. They are provided as-is, without any warranty, expressed or implied. The code, documentation, and other materials may be incomplete, contain errors, or lack optimization.

### No Guarantees:

While efforts have been made to ensure the accuracy and reliability of the materials provided, no guarantees are made regarding their correctness, completeness, or suitability for any particular purpose. Users are encouraged to review and verify all information independently.

### Limited Support:

Support for the contents of this repository may be limited or unavailable. Contributors to this repository may provide assistance on a best-effort basis, but there is no obligation to do so. Users are encouraged to collaborate and share insights within the community.

### Not Legal Advice:

Any information, including but not limited to legal, regulatory, or compliance-related guidance, provided within this repository is for informational purposes only. It does not constitute legal advice or a substitute for professional consultation. Users should consult appropriate experts for specific legal matters.

### Use at Your Own Risk:

The use of any materials from this repository is at your own risk. The contributors to this repository shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use of, or inability to use, the materials provided herein.

By accessing or using any materials within this repository, you agree to these terms and conditions. If you do not agree with these terms, you should not access or use the contents of this repository. This disclaimer is subject to change without notice.
