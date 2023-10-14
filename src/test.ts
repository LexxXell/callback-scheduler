import { callbackScheduler } from '.';

function myAsyncCallback() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log('Async callback executed!');
      resolve();
    }, 2000);
  });
}

callbackScheduler(myAsyncCallback, 3000); // Executes myAsyncCallback every 3 seconds
