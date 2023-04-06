# React native useful information

## 🗂️ Installation guide [Docs](https://reactnative.dev/docs/getting-started)

1. Download an IDE (Visual Studio Code, WebStorm ...)
2. Download Xcode / Android Studio for simulators / emulators -- expo
3. Download Node.js LTS.
4. Install expo-cli globally: `npm i -g expo-cli`
5. Initialize an application in the current directory: `expo init . --npm`
6. Run the application: `npm start`
7. Scan the QR code / run the app in a simulator / emulator

## 🧭 Navigation setup [Docs](https://reactnavigation.org/docs/getting-started/)

#### General setup
1. `npm install @react-navigation/native`
2. `expo install react-native-screens react-native-safe-area-context`

#### Stack Navigation setup steps
1. `npm install @react-navigation/native-stack`

#### Tab Navigation setup steps
1. `npm install @react-navigation/bottom-tabs`
2. `npm install @expo/vector-icons` // note that this is optional, and it is only necessary if you would like those icons for the bottom tabs

#### Drawer Navigation setup steps
1. `npm install @react-navigation/drawer`
2. `expo install react-native-gesture-handler react-native-reanimated`

3. Add the following plugin in `babel.config.js`:
```js
  ...
  return {
    ...
    plugins: [
      'react-native-reanimated/plugin',
    ],
  }
  ...
```

## 🖌️ Design:
[RNUILib](https://wix.github.io/react-native-ui-lib/) <br>
[Material Design](https://m3.material.io/)

## Look at this components ⬇️

>Big card
<img src="./readme_img/bigCard.PNG" width="240" height="300">
