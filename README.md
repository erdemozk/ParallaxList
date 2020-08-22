<p align="center">
  <h1 align="center">ParallaxList</h1>
</p>

![Build Status](https://travis-ci.org/badges/badgerbadgerbadger.svg?branch=master&status=passed)

## Table of Contents

- [Description](#description)
- [Running](#running)
- [Requirements](#requirements)
- [Components Used](#components-used)
- [References](#references)
- [License](#license)

---

## Description

Kodluyoruz aracılığıyla sağlanan iş başvurusunun ödev projesidir.

---

## Running

```shell
git clone git@github.com:erdemozk/ParallaxList.git
cd ParallaxList
npm install
react-native run-android or react-native run-ios
```

---

## Requirements

React-Native 0.63 sürümü proje için yeterlidir. Ekstra bir pakete ihtiyaç duyulmamaktadır.

---

## Components Used

- [x] [React]
- [x] [SafeAreaView]
- [x] [ParallaxList]
- [x] [View]
- [x] [Animated.Text]
- [x] [Animated.ScrollView]
- [x] [ImageBackground]

## `ParallaxList` Component

Uygulamanın ana komponentidir.

```js
import ParallaxList from './src/views/ParallaxList';
```

### Properties

JSON gereksinimlerini karşılayan herhangi bir JSON dosyası ile aşağıdaki şekilde kullanılabilir:

| Prop        | Description                                       | Default     | Type     | Required   |
| ----------- | ------------------------------------------------- | ----------- | -------- | ---------- |
| **`data`**  | Kartlardaki yazı ve resmi sağlacak olan veri      | _None_      | JSON     | YES        |

#### JSON Requirements

| Key          | Description                                      | Value Type       | Required     |
| ------------ | ------------------------------------------------ | ---------------- | ------------ |
| **`id`**     | Kartın View'inde eşsiz id                        | Text(Numeric)    | YES          |
| **`genre`**  | Kartın Text'inde bulunan yazı                    | Text             | YES          |
| **`image`**  | Kartın ImageBackground'unda bulunan resim        | URL or PATH      | YES          |




## References

- [React Native Docs](https://facebook.github.io/react-native/docs/getting-started.html)
- [React Native Animated API](https://reactnative.dev/docs/animated)
- [Stack Overflow](https://stackoverflow.com/)
- [Youtube](https://www.youtube.com/)

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**