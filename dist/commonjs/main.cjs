'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const LOG_LEVEL_OFF = "off";
const LOG_LEVEL_DEBUG = "debug";
const LOG_LEVEL_INFO = "info";
const LOG_LEVEL_WARN = "warn";
const LOG_LEVEL_ERROR = "error";

const createLogger = ({
  logLevel = LOG_LEVEL_INFO
} = {}) => {
  if (logLevel === LOG_LEVEL_DEBUG) {
    return {
      debug,
      info,
      warn,
      error
    };
  }

  if (logLevel === LOG_LEVEL_INFO) {
    return {
      debug: debugDisabled,
      info,
      warn,
      error
    };
  }

  if (logLevel === LOG_LEVEL_WARN) {
    return {
      debug: debugDisabled,
      info: infoDisabled,
      warn,
      error
    };
  }

  if (logLevel === LOG_LEVEL_ERROR) {
    return {
      debug: debugDisabled,
      info: infoDisabled,
      warn: warnDisabled,
      error
    };
  }

  if (logLevel === LOG_LEVEL_OFF) {
    return {
      debug: debugDisabled,
      info: infoDisabled,
      warn: warnDisabled,
      error: errorDisabled
    };
  }

  throw new Error(`unexpected logLevel.
--- logLevel ---
${logLevel}
--- allowed log levels ---
${LOG_LEVEL_OFF}
${LOG_LEVEL_ERROR}
${LOG_LEVEL_WARN}
${LOG_LEVEL_INFO}
${LOG_LEVEL_DEBUG}`);
};
const debug = console.debug;

const debugDisabled = () => {};

const info = console.info;

const infoDisabled = () => {};

const warn = console.warn;

const warnDisabled = () => {};

const error = console.error;

const errorDisabled = () => {};

const disabledMethods = {
  debug: debugDisabled,
  info: infoDisabled,
  warn: warnDisabled,
  error: errorDisabled
};
const loggerIsMethodEnabled = (logger, methodName) => {
  return logger[methodName] !== disabledMethods[methodName];
};
const loggerToLevels = logger => {
  return {
    debug: loggerIsMethodEnabled(logger, "debug"),
    info: loggerIsMethodEnabled(logger, "info"),
    warn: loggerIsMethodEnabled(logger, "warn"),
    error: loggerIsMethodEnabled(logger, "error")
  };
};
const loggerToLogLevel = logger => {
  if (loggerIsMethodEnabled(logger, "debug")) return LOG_LEVEL_DEBUG;
  if (loggerIsMethodEnabled(logger, "info")) return LOG_LEVEL_INFO;
  if (loggerIsMethodEnabled(logger, "warn")) return LOG_LEVEL_WARN;
  if (loggerIsMethodEnabled(logger, "error")) return LOG_LEVEL_ERROR;
  return LOG_LEVEL_OFF;
};

const createDetailedMessage = (message, details = {}) => {
  let string = `${message}`;
  Object.keys(details).forEach(key => {
    const value = details[key];
    string += `
--- ${key} ---
${Array.isArray(value) ? value.join(`
`) : value}`;
  });
  return string;
};

exports.LOG_LEVEL_DEBUG = LOG_LEVEL_DEBUG;
exports.LOG_LEVEL_ERROR = LOG_LEVEL_ERROR;
exports.LOG_LEVEL_INFO = LOG_LEVEL_INFO;
exports.LOG_LEVEL_OFF = LOG_LEVEL_OFF;
exports.LOG_LEVEL_WARN = LOG_LEVEL_WARN;
exports.createDetailedMessage = createDetailedMessage;
exports.createLogger = createLogger;
exports.loggerIsMethodEnabled = loggerIsMethodEnabled;
exports.loggerToLevels = loggerToLevels;
exports.loggerToLogLevel = loggerToLogLevel;

//# sourceMappingURL=main.cjs.map