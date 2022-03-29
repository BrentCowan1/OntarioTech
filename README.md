# VSG
These instructions are for Ubuntu 20.04.

## Editor set-up
- Clone this repository
- Access directory `ScenarioEditor`
- Install basic development packages: `sudo apt-get install build-essential`
- Install npm. Check [this guide](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-20-04/#install-nodejs-and-npm-from-the-ubuntu-repository) for instructions on different methods to install node.js and npm.
- Install yarn: `sudo npm install -g yarn`
- Install dependencies: `yarn install`
- To run locally in development mode: `yarn serve`
- To build it for deployment: `yarn build`
