# README #

### What is this repository for? ###

This is POC repo for NightwatchJS and Mocha API/web automation using BDD and page object

### How do I get set up? ###

**1.** Install latest NVM and Node: https://bizzyid.atlassian.net/wiki/spaces/QE/pages/129007743/Updating+Node.js+Version+using+NVM

**2.** Install firefox for ubuntu:
```sh
$ sudo apt-get install firefox
```

**3.** Install chrome for ubuntu:
```sh
$ wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
$ echo 'deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main' | sudo tee /etc/apt/sources.list.d/google-chrome.list
$ sudo apt-get update
$ sudo apt-get install google-chrome-stable
```

**4.** Install phantomjs for ubuntu:
```sh
$ sudo apt-get install phantomjs
```

**5.** Clone this repo

**6.** Access the folder

**7.** Install all dependencies:
```sh
$ npm install
```
Try this if you found any  symlink error:
```sh
$ npm install --no-bin-links
```

**7.** Run task-runner:
```sh
$ grunt
```

**9.** Run test:
```sh
$ npm run test-docker-chrome
or
$ npm run test-docker-firefox
or
$ npm run test-docker-phantomjs
or
$ npm run test-chrome
or
$ npm run test-firefox
or
$ npm run test-phantomjs
or
$ npm run test-api
```

**9.** Run report:
```sh
$ npm run report-chrome
or
$ npm run report-chrome
or
$ npm run report-phantomjs
```
