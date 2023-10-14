"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.callbackScheduler = void 0;
/**
 * Schedules the execution of the provided callback with a specified period.
 * @param callback - The callback to execute.
 * @param periodInMilliseconds - The period in milliseconds between each execution of the callback.
 * @param logger - The logger used for error logging (default is console).
 */
function callbackScheduler(callback, periodInMilliseconds, logger = console) {
    return __awaiter(this, void 0, void 0, function* () {
        /**
         * Internal function to execute the callback with the specified period.
         */
        function executeCallback() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    yield callback();
                }
                catch (error) {
                    logger.error(`Error occurred: ${error}`);
                }
                finally {
                    setTimeout(executeCallback, periodInMilliseconds);
                }
            });
        }
        executeCallback();
    });
}
exports.callbackScheduler = callbackScheduler;
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
