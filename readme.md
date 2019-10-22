# Logger

[![github package](https://img.shields.io/github/package-json/v/jsenv/jsenv-logger.svg?logo=github&label=package)](https://github.com/jsenv/jsenv-logger/packages)
[![npm package](https://img.shields.io/npm/v/@jsenv/logger.svg?logo=npm&label=package)](https://www.npmjs.com/package/@jsenv/logger)
[![github ci](https://github.com/jsenv/jsenv-logger/workflows/ci/badge.svg)](https://github.com/jsenv/jsenv-logger/actions?workflow=ci)
[![codecov coverage](https://codecov.io/gh/jsenv/jsenv-logger/branch/master/graph/badge.svg)](https://codecov.io/gh/jsenv/jsenv-logger)

Logger with levels to control verbosity.

## Table of contents

- [Presentation](#Presentation)
- [Usage](#usage)
  - [createLogger](#createLogger)
  - [logger](#logger)
  - [logLevel](#logLevel)
  - [Migration from console](#migration-from-console)
- [Installation](#installation)

## Presentation

`jsenv-logger` github repository corresponds to `@jsenv/logger` package published on github and npm package registries.

You want to use `@jsenv/logger` when you have many logs with different purposes and controls which type of logs are actually written.

## Usage

This documentation explains how to use `@jsenv/logger` in your codebase.

### createLogger

> Returns a `logger` object with methods being silent according to a given `logLevel`.<br />
> Implemented by [src/createLogger/createLogger.js](src/createLogger/createLogger.js)

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

### logger

A `logger` is an object with the following methods:

- `debug`
- `info`
- `warn`
- `error`

Each method calls the corresponding console method or do nothing depending on the `logLevel`.

### logLevel

`logLevel` can be one of the following:

- `"off"`
- `"debug"`
- `"info"`
- `"warn"`
- `"error"`

If you are rigorous you can import them to use constants like this:

```js
import { createLogger, LOG_LEVEL_INFO } from "@jsenv/logger"

createLogger({ logLevel: LOG_LEVEL_INFO })
```

### Migration from console

Using `@jsenv/logger` means converting console methods into logger methods: `console.info` becomes `logger.info`.

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
