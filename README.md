# React Desktop/Mobile Showcase

## Setup Desktop App

```bash
cd desktop_app_electron_react
npm install
```

  * Click the Pink Login Button
  * Click submit button

## Setup Mobile App

## Mac - iOS Pre-Reqs
```bash
Have Xcode up to date.
```

## Android Pre-Reqs
  * Android Studio
      * AVD Lets make an Nexus 5 using Marshmallow (6.0)
      * Build Tools 23.0.1
  * Setup Environment Variables __ANDROID_HOME__ && __JAVA_HOME__
      * [React Native Windows Guide (For more details)](https://facebook.github.io/react-native/docs/getting-started.html#content)

## Mac - iOS & Android
```bash
cd mobile_app_react_native

brew install node
brew install watchman
npm install -g react-native-cli

npm install

react-native run-ios
react-native run-android
```

## For windows - Android


```bash
// Install Chocolatey (Windows Package Manager)
// Launch a powershell with admin priveledge
iwr https://chocolatey.org/install.ps1 -UseBasicParsing | iex

choco install nodejs.install
choco install python2

npm install -g react-native-cli

cd mobile_app_react_native

// Boot up your Android Emulated Device

react-native run-android

```




