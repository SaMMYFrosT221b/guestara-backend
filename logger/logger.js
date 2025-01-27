import { backendLogger } from "./backendLogger.js";

let logger;

if (process.env.NODE_ENV !== "production") {
  logger = backendLogger();
}

export default logger;
