# css-to-rn

![author](https://img.shields.io/badge/author-Nitin%20Tulswani-blue.svg)

[![Build Status](https://travis-ci.org/nitin42/css-to-rn.svg?branch=master)](https://travis-ci.org/nitin42/css-to-rn)

> Convert css string to React Native

## What ?

`css-to-rn` converts your css style string to React Native. It does not support interpolations so you cannot change styles dynamically based on props.

## Install

```
npm install css-to-rn
```

or if you use yarn

```
yarn add css-to-rn
```

## Usage

```js
import React from 'react';
import { Text, View } from 'react-native';
import cssToRn from 'css-to-rn';

const styles = cssToRn(
  `flex: 1; background-color: hotpink; align-items: center; justify-content: center;`
);

class App extends React.Component {
  render() {
    return (
      <View style={styles}>
        <Text>Hello World</Text>
      </View>
    );
  }
}
```

## License

MIT
