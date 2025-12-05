import { useRef, useCallback } from "react";
// It can take any number of arguments and return anything.
type CallbackFunction<T extends any[]> = (...args: T) => void;

/**
 * Custom hook to debounce a function call.
 * @param {function} callback - The function to be debounced (e.g., saveListToStorage).
 * @param {number} delay - The delay in milliseconds.
 * @returns {function} A debounced version of the callback function.
 */

export const useDebounce = <T extends any[]>(
  callback: CallbackFunction<T>,
  delay: number
): CallbackFunction<T> => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedCallback = useCallback(
    (...args: T) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  return debouncedCallback;
};
