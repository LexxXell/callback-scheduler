"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
function myAsyncCallback() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Async callback executed!');
            resolve();
        }, 2000);
    });
}
(0, _1.callbackScheduler)(myAsyncCallback, 3000); // Executes myAsyncCallback every 3 seconds
