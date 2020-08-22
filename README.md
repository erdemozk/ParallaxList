<p align="center">
  <h1 align="center">ParallaxList</h1>
</p>

![Build Status](https://travis-ci.org/badges/badgerbadgerbadger.svg?branch=master&status=passed)

## Table of Contents

- [Clone](#clone)
- [Requirements](#requirements)
- [Components Used](#components)
- [FAQ](#faq)
- [License](#license)

---

## Clone

- You can clone this repo to your local machine using `https://github.com/erdemozk/ParallaxList.git`

---

## Gereklilikler

React-Native 0.63 sürümü proje için yeterlidir. Ekstra bir pakete ihtiyaç duyulmamaktadır.

---

## Kullanılan Komponentler

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
import ParallaxList from 'react-native-vector-icons/FontAwesome';
```

### Properties

JSON içeriği gereksinimleri karşılayan herhangi bir JSON dosyası ile aşağıdaki şekilde kullanılabilir:

| Prop        | Description                                               | Default     | Type     | Required   |
| ----------- | --------------------------------------------------------- | ----------- | -------- | ---------- |
| **`data`**  | Kartlardaki yazı ve resmi sağlacak olan veri              | _None_      | JSON     | YES        |

#### JSON Requirements

| Prop         | Description                                      | Type             | Required     |
| ------------ | ------------------------------------------------ | ---------------- | ------------ |
| **`id`**     | Kartın View'inde eşsiz id                        | Text(Numeric)    | YES          |
| **`genre`**  | Kartın Text'inde bulunan yazı                    | Text             | YES          |
| **`image`**  | Kartın ImageBackground'unda bulunan resim        | URL or PATH      | YES          |






---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**