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

Copy uplink git folder with installed features into node_module folder
