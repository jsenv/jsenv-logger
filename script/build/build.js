import { buildProject, getBabelPluginMapForNode } from "@jsenv/core"
import * as jsenvConfig from "../../jsenv.config.js"

buildProject({
  ...jsenvConfig,
  buildDirectoryRelativeUrl: "./dist/commonjs/",
  entryPointMap: {
    "./main.node.js": "./jsenv_logger.cjs",
  },
  format: "commonjs",
  babelPluginMap: getBabelPluginMapForNode(),
  buildDirectoryClean: true,
})
