# jsenv-logger

[![github package](https://img.shields.io/github/package-json/v/jsenv/jsenv-logger.svg?label=package&logo=github)](https://github.com/jsenv/jsenv-logger/packages)
[![continuous testing status](https://github.com/jsenv/jsenv-logger/workflows/continuous%20testing/badge.svg)](https://github.com/jsenv/jsenv-logger/actions?workflow=continuous+testing)
[![codecov](https://codecov.io/gh/jsenv/jsenv-logger/branch/master/graph/badge.svg)](https://codecov.io/gh/jsenv/jsenv-logger)

## Introduction

`@jsenv/logger` exists to control console verbosity during the execution of something.

It is very simple, does on thing and does it well.
It is used a lot in the jsenv codebase.

## Table of contents

- [Example](#example)
- [api](#api)
  - [Logger object](#logger-object)
  - [List of log levels](#list-of-log-levels)
  - [LOG_LEVEL constants](#loglevel-constants)
- [Why no logger.log?](#why-not-logger-log)
- [Installation](#installation)

## Example

```js
import { createLogger } from "@jsenv/logger"

const functionWithLogs = ({ logLevel }) => {
  const logger = createLogger({ logLevel })

  logger.info("start doing whetevr")
  logger.info("doing whatever is done")
  logger.warn("be careful about blah-blah")
  logger.error("oops an error occured while doing whatever")
}

functionWithLogs({ logLevel: "info" })
functionWithLogs({ logLevel: "warn" })
functionWithLogs({ logLevel: "error" })
functionWithLogs({ logLevel: "off" })
```

— see [source code on github](./src/createLogger/createLogger.js)

## api

The example above is pretty self documenting.
What still remains to be documented is below.

### Logger object

A logger returned by `createLogger` is an object with the following methods:

- `trace`
- `info`
- `warn`
- `error`

Each method calls the corresponding console method or do nothing depending on the `logLevel`.

Because saying a log level of `"log"` would be strange there is no logLevel named `"log"`.
`"info"` was choosen instead meaning logger calls `console.info`, never `console.log`.

### List of log levels

- `"off"`
- `"trace"`
- `"info"`
- `"warn"`
- `"error"`

### LOG_LEVEL constants

`@jsenv/logger` exports `LOG_LEVEL_*` constants corresponding to the log level strings above.<br />
If you are rigorous you can import and use them like this:

```js
import { createLogger, LOG_LEVEL_INFO } from "@jsenv/logger"

createLogger({ logLevel: LOG_LEVEL_INFO })
```

## Installation

If you never installed a jsenv package, read [Installing a jsenv package](https://github.com/jsenv/jsenv-core/blob/master/docs/installing-jsenv-package.md#installing-a-jsenv-package) before going further.

This documentation is up-to-date with a specific version so prefer any of the following commands

```console
npm install @jsenv/logger@1.1.0
```

```console
yarn add @jsenv/logger@1.1.0
```
