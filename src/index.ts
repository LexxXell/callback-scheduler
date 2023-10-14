/**
 * Interface for the logger object used for error logging.
 */
interface ILogger {
  log: (message: string) => void;
  error: (message: string) => void;
  warn: (message: string) => void;
  info: (message: string) => void;
}

/**
 * Schedules the execution of the provided callback with a specified period.
 * @param callback - The callback to execute.
 * @param periodInMilliseconds - The period in milliseconds between each execution of the callback.
 * @param logger - The logger used for error logging (default is console).
 */
export async function callbackScheduler(
  callback: () => Promise<void>,
  periodInMilliseconds: number,
  logger: ILogger = console,
) {
  /**
   * Internal function to execute the callback with the specified period.
   */
  async function executeCallback() {
    try {
      await callback();
    } catch (error) {
      logger.error(`Error occurred: ${error}`);
    } finally {
      setTimeout(executeCallback, periodInMilliseconds);
    }
  }
  executeCallback();
}

// Example usage:
// function myAsyncCallback() {
//   return new Promise<void>((resolve) => {
//     setTimeout(() => {
//       console.log('Async callback executed!');
//       resolve();
//     }, 2000);
//   });
// }

// callbackScheduler(myAsyncCallback, 3000); // Executes myAsyncCallback every 3 seconds
