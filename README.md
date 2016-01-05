# babel-plugin-dev

Replaces `__DEV__` with `process.env.NODE_ENV !== 'production'`.

## Installation

```sh
$ npm install babel-plugin-dev
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["dev"]
}
```

### Via CLI

```sh
$ babel --plugins dev script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["dev"]
});
```

## Running the tests

```sh
$ git clone https://github.com/Zenwolf/babel-plugin-dev.git
$ cd babel-plugin-dev
$ npm install
$ npm test
```

