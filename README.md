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


