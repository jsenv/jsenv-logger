# Logger

[![github package](https://img.shields.io/github/package-json/v/jsenv/jsenv-logger.svg?logo=github&label=package)](https://github.com/jsenv/jsenv-logger/packages)
[![npm package](https://img.shields.io/npm/v/@jsenv/logger.svg?logo=npm&label=package)](https://www.npmjs.com/package/@jsenv/logger)
[![github ci](https://github.com/jsenv/jsenv-logger/workflows/ci/badge.svg)](https://github.com/jsenv/jsenv-logger/actions?workflow=ci)
[![codecov coverage](https://codecov.io/gh/jsenv/jsenv-logger/branch/master/graph/badge.svg)](https://codecov.io/gh/jsenv/jsenv-logger)

Control verbosity of logs during a function execution.

## Table of contents

- [Presentation](#Presentation)
- [Usage](#usage)
  - [createLogger](#createLogger)
  - [logLevel](#logLevel)
  - [logger](#logger)
  - [Migration from console](#migration-from-console)
- [Installation](#installation)

## Presentation

You want to use `@jsenv/logger` when you have many logs with different purposes and controls which type of logs are actually written.

`jsenv-logger` github repository corresponds to `@jsenv/logger` package published on github and npm package registries.

## Usage

This documentation explains how to use `@jsenv/logger` in your codebase.

### createLogger

> `createLogger` is a function receiving a `logLevel` and returning a `logger` object.

Implemented in [src/createLogger.js](./src/createLogger.js), you can use it as shown below.

```js
import { createLogger } from "@jsenv/logger"

const functionWithLogs = ({ logLevel }) => {
  const logger = createLogger({ logLevel })

  logger.debug("start doing whetevr")
  logger.info("some useful info")
  logger.debug("doing whatever is done")
  logger.warn("be careful about blah-blah")
  logger.error("oops an error occured while doing whatever")
}

functionWithLogs({ logLevel: "debug" })
functionWithLogs({ logLevel: "info" })
functionWithLogs({ logLevel: "warn" })
functionWithLogs({ logLevel: "error" })
functionWithLogs({ logLevel: "off" })
```

### logLevel

> `logLevel` parameter is a string controlling verbosity of the returned `logger`.

The possible logLevel values are:

- `"off"`
- `"debug"`
- `"info"`
- `"warn"`
- `"error"`

If you are rigorous, each logLevel value is exported as a constant that you can use like this:

```js
import { createLogger, LOG_LEVEL_INFO } from "@jsenv/logger"

createLogger({ logLevel: LOG_LEVEL_INFO })
```

### logger

> `logger` is an object with methods logging a message with a given level.

It is returned by `createLogger`, and has the following shape: `{ debug, info, warn, error }`. Each method calls the corresponding console method or do nothing depending on the `logLevel`.

```js
import { createLogger } from "@jsenv/logger"

const logger = createLogger({ logLevel: "info" })
logger.debug("hello")
```

Logs nothing

```js
import { createLogger } from "@jsenv/logger"

const logger = createLogger({ logLevel: "info" })
logger.info("hello")
```

Logs `Hello`

### Migration from console

Using `@jsenv/logger` means converting console methods into logger methods. `console.info` becomes `logger.info` and so on.

But keep in mind there is no `logger.log`. This is because a log level named "log" would not fit into the log level hierachy below.

```
error > warn > info > debug
```

It means you have to convert `console.log` into `logger.debug` or `logger.info`.

## Installation

Before installing, please note that you cannot directly `require` this package because there is no commonjs version for the source code.

If you never installed a jsenv package, read [Installing a jsenv package](https://github.com/jsenv/jsenv-core/blob/master/docs/installing-jsenv-package.md#installing-a-jsenv-package) before going further.

This documentation is up-to-date with a specific version so prefer any of the following commands

```console
npm install @jsenv/logger@3.1.0
```

```console
yarn add @jsenv/logger@3.1.0
```
