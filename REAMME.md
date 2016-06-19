## Capew Mobile
React native implementation of Capew.

## Read the following documentations for instructions.
```
Prerequisites: /docs/prerequisites.md
Configurations: /docs/configurations.md
```

## Execute terminal commands in the following order
```
$ sudo mkdir -p /data/db
$ sudo chown -R $USER /data/db
$ ln -sfv /usr/local/opt/mongodb/*.plist ~/Library/LaunchAgents
$ mongod

$ sudo lsof -iTCP -sTCP:LISTEN -n -P
$ sudo kill -9 <pid>
$ npm install
$ export NODE_ENV=dev
$ echo $NODE_ENV
$ react-native run-ios
```
## Refresh and restart server
```
$ watchman watch-del-all
$ rm -rf node_modules && npm install
$ npm start -- --reset-cache
```

## Debugging
```
Select iOS simulator, press ⌘D to open "React Native: Development" menu.
Select "Dismiss (ESC)" "Red Screen of Death" on iOS Simulator
Select "Debug JS Remotely"
Press ⌘⌥J to open "Developer Tools" on Chrome.
```
