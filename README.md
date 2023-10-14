# Callback Scheduler

This TypeScript function allows you to schedule the execution of a provided callback function with a specified time period. It is particularly useful when you need to repeatedly execute a function at regular intervals, even if the callback function is asynchronous.

## Installation

No installation is required for this script. Simply include the `callbackScheduler` function in your TypeScript project.

## Usage

```typescript
import { callbackScheduler, ILogger } from './callbackScheduler';

// Define your asynchronous callback function
async function myAsyncCallback() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log('Async callback executed!');
      resolve();
    }, 2000);
  });
}

// Define a custom logger if needed
const customLogger: ILogger = {
  log: (message: string) => {
    // Custom logging implementation
    // Example: write to a file
  },
};

// Use the callbackScheduler function
callbackScheduler(myAsyncCallback, 3000, customLogger); // Executes myAsyncCallback every 3 seconds
```

## Custom Logger

You can provide a custom logger implementing the `ILogger` interface. By default, the `console` object is used for error logging.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
