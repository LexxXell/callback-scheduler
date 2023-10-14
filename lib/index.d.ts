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
export declare function callbackScheduler(callback: () => Promise<void>, periodInMilliseconds: number, logger?: ILogger): Promise<void>;
export {};
