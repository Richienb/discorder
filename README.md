# discorder [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/discorder/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/discorder)

Create Discord bots.

[![NPM Badge](https://nodei.co/npm/discorder.png)](https://npmjs.com/package/discorder)

## Install

```sh
npm install discorder
```

## Usage

```js
const discorder = require("discorder");

const bot = discorder("bot token");

client.on("ready", () => {
	console.log("Connected!");
});
```

## API

### discorder(token, options?)

Returns a new [`Discord.Client`](https://discord.js.org/#/docs/main/stable/class/Client) instance.

#### token

Type: `string`

The Discord bot token.

#### options

Type: `object`

Same as options for [`Discord.Client`](https://discord.js.org/#/docs/main/stable/class/Client).
