[![npm](https://img.shields.io/npm/l/linux-key-info.svg)](https://github.com/yoava/node-linux-key-info/blob/master/LICENSE)
[![Github file size](https://img.shields.io/github/size/yoava/node-linux-key-info/dist/linux-key-info.min.js.svg)](https://www.npmjs.com/package/linux-key-info)
[![GitHub tag](https://img.shields.io/github/tag/yoava/node-linux-key-info.svg)](https://github.com/yoava/node-linux-key-info/tags)
[![npm](https://img.shields.io/npm/v/linux-key-info.svg)](https://www.npmjs.com/package/linux-key-info)
[![Bintray](https://img.shields.io/bintray/v/yoava/npm/node-linux-key-info.svg)](https://bintray.com/yoava/npm/node-linux-key-info)
[![GitHub issues](https://img.shields.io/github/issues/yoava/node-linux-key-info.svg)](https://github.com/yoava/node-linux-key-info/issues)
[![Maintainability](https://api.codeclimate.com/v1/badges/dc8eb840650bf486075a/maintainability)](https://codeclimate.com/github/yoava/node-linux-key-info/maintainability)
[![Depfu](https://badges.depfu.com/badges/e8d369563dfc5d735d6b563617cf9384/overview.svg)](https://depfu.com/github/yoava/node-linux-key-info)


# node-linux-key-info

A simple utility for getting key info for a given linux key code.

## Installation:

```bash
# using npm
npm i --save linux-key-info

# or yarn
yarn add linux-key-info
```

## Usage:

```javascript

// get info for a given key code
const keyCodeInfo = require('linux-key-info').keyCodeInfo;

console.log(keyCodeInfo(30).name); // 'A'
console.log(keyCodeInfo(30).char); // 'A'

console.log(keyCodeInfo(1).name); // 'ESC'
console.log(keyCodeInfo(1).char); // ''

// list all known keys
const listAllKnownKeys = require('linux-key-info').listAllKnownKeys;

console.log('All known keys:',listAllKnownKeys());
```

## Example usage with 'input-event' package

```bash
$ npm i input-event linux-key-info --save
```

```javascript
const InputEvent = require('input-event');
const keyCodeInfo = require('linux-key-info').keyCodeInfo;

const input = new InputEvent('/dev/input/event0');
const keyboard = new InputEvent.Keyboard(input);

keyboard.on('keypress', (event) => {
  const info = keyCodeInfo(event.code);
  console.log(`Key pressed: code=${event.code}, name="${info.name}", char="${info.char}"`);
});
```
