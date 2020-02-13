# React-Native integration template

Simple Native apps integrated with React native inside

### Fast start
```sh
# Clone the repository
$ git clone https://github.com/njiyto/react-native-integration.git

# first install react-native
$ cd web

# install dependencies
$ npm install

# here we can develop our react-native
```

### build our app for iOS
```sh
# create bundle for ios
$ npm run build:ios

# go to native-ios 
$ cd ../native-ios

# install pods 
$ pod install

# open your native-ios project in Xcode
# build project
```

### build for Android
```sh
# create bundle for android
$ npm run build:android

# go to native-android
$ cd ../native-android

# install pods 
$ pod install

# open your native-ios project in Android Studio
# build project
```

### Contribution
everytime check:
```
$ git config user.email
$ git config user.email 'example@mail'
$ git remote -v
$ git remote set-url origin