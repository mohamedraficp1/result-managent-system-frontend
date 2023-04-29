import { Loader } from "../utils";
import handleError from "./errorHandler";

/**
 * This function will automatically catches all exceptions of the given asynchronous function.
 * It will hide the global loader and will show the toast message for exceptions
 * @param {Function} callback
 * @returns void
 */
export const safeFunctionAsync = async (
  handler,
  helperFunction = {
    catch: () => null,
    finally: () => null,
  }
) => {
  try {
    await handler();
  } catch (exception) {
    handleError(exception);
    Loader.hide();
    helperFunction.catch && helperFunction.catch();
    console.log("Error : ", exception); // do not remove this line
  } finally {
    helperFunction.finally && helperFunction.finally();
  }
};

/**
 * This function will automatically catches all exceptions of the given synchronous function.
 * It will hide the global loader and will show the toast message for exceptions
 * @param {Function} callback
 * @returns void
 */
export const safeFunction = async (
  handler,
  helperFunction = {
    catch: () => null,
    finally: () => null,
  }
) => {
  try {
    handler();
  } catch (exception) {
    handleError(exception);
    Loader.hide();
    helperFunction.catch && helperFunction.catch();
    console.log("Error : ", exception); // do not remove this line
  } finally {
    helperFunction.finally && helperFunction.finally();
  }
};
