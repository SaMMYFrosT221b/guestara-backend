import winston from 'winston';

export const backendLogger = () => {
  return winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.colorize(), // Adds colors to console logs
      winston.format.timestamp(), // Adds timestamps to logs
      winston.format.printf(({ timestamp, level, message, ...meta }) => {
        // Custom formatting for console output
        return `${timestamp} : ${message} ${Object.keys(meta).length ? JSON.stringify(meta) : ''}`;
      })
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
      new winston.transports.Console(), // Logs to the console
      new winston.transports.File({ filename: 'error.log', level: 'error' }), // Logs only errors to error.log
      new winston.transports.File({ filename: 'combined.log' }), // Logs all levels to combined.log
    ],
  });
};
