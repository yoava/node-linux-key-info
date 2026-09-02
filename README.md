# node-linux-key-info

A simple utility for getting key info for a given Linux key code (as emitted by
`/dev/input/eventX`). Published on npm as [`linux-key-info`](https://www.npmjs.com/package/linux-key-info).

**Archived** — this project is no longer maintained, but the npm package remains published and usable.

## Install

```bash
npm i --save linux-key-info
```

## Usage

```javascript
const { keyCodeInfo, listAllKnownKeys } = require('linux-key-info');

console.log(keyCodeInfo(30).name); // 'A'
console.log(keyCodeInfo(1).name);  // 'ESC'
console.log(listAllKnownKeys());   // all ~145 known keys
```

Pairs well with the [`input-event`](https://www.npmjs.com/package/input-event) package for
reading raw keyboard events on Linux:

```javascript
const InputEvent = require('input-event');
const { keyCodeInfo } = require('linux-key-info');

const input = new InputEvent('/dev/input/event0');
const keyboard = new InputEvent.Keyboard(input);

keyboard.on('keypress', (event) => {
  const info = keyCodeInfo(event.code);
  console.log(`Key pressed: code=${event.code}, name="${info.name}", char="${info.char}"`);
});
```

## Tech

Plain Node.js (CommonJS), no runtime dependencies. Built with webpack 4; tested with mocha/chai.

## Note

`package.json` on this branch is at `1.0.1`; npm's published `latest` is `1.0.2` (a version-only
bump made from a tag that was never merged back to `master`). The code is identical between the
two — cosmetic only.

## License

MIT
