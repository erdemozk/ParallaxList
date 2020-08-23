<p align='center'>
<img src="readme-assets/react-native.png">
</p>
<h1 align='center'>ParallaxList</h1>

![Build Status](https://travis-ci.org/badges/badgerbadgerbadger.svg?branch=master&status=passed) **Made with React Native**  

It is made entirely using React Native and React Native Animated API. No third party packages have been used.

## In-App

<p>
<img width="370" height="803" src="readme-assets/in-app.gif">
<img width="370" height="803" src="readme-assets/in-app-screenshot.png">
</p>

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Clone and Running](#clone-and-running)
- [Components Used](#components-used)
- [ParallaxList Component](#parallaxList-component)
- [Author](#author)
- [References](#references)
- [License](#license)

## Prerequisites

React Native 0.63 version is sufficient for the project. There is no need for an extra package.

## Clone and Running

```shell
git clone git@github.com:erdemozk/ParallaxList.git
cd ParallaxList
npm install
react-native run-android or react-native run-ios
```

## Components Used

- [x] [React]
- [x] [ReactNative]
    - [x] [SafeAreaView]
    - [x] [View]
    - [x] [Animated]
        - [x] [Text]
        - [x] [ScrollView]
    - [x] [ImageBackground]
- [x] [ParallaxList]


---

## `ParallaxList` Component

It is the main component of the application.

```js
import ParallaxList from './src/views/ParallaxList';
```

### Properties

It can be used with any JSON file that meets the JSON requirements follows:

| Prop        | Description                                       | Default     | Type     | Required   |
| ----------- | ------------------------------------------------- | ----------- | -------- | ---------- |
| **`data`**  | Data to will provide text and picture on cards    | _None_      | JSON     | YES        |

#### JSON Requirements

| Key          | Description                                             | Value Type      | Required     |
| ------------ | ------------------------------------------------------- | --------------- | ------------ |
| **`id`**     | Unique ID in the View Component of the card             | String          | YES          |
| **`genre`**  | Text in the Text Component of the card                  | String          | YES          |
| **`image`**  | Image in the ImageBackground Component of the card      | URL or PATH     | YES          |

## Author

👤 **Erdem Özkök**

- LinkedIn: [@erdemozk](https://www.linkedin.com/in/erdemozk/)
- Github: [@erdemozk](https://github.com/erdemozk)
- Mail: [@erdemozkok](mailto:erdemozkok@hotmail.com.tr)

## References

- [React Native Docs](https://facebook.github.io/react-native/docs/getting-started.html)
- [React Native Animated API](https://reactnative.dev/docs/animated)
- [Stack Overflow](https://stackoverflow.com/)
- [Youtube](https://www.youtube.com/)

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
