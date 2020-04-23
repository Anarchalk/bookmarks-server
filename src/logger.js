const winston = require("winston");
const { NODE_ENV } = require("./config");

//set up winston - log failures in log.info file on severity level of info
const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    transports: [new winston.transports.File({ filename: "info.log" })],
  });
  
  if (NODE_ENV !== "production") {
    logger.add(
      new winston.transports.Console({
        format: winston.format.simple(),
      })
    );
  }

  module.exports = logger