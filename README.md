# css-to-rn

![author](https://img.shields.io/badge/author-Nitin%20Tulswani-blue.svg)

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
