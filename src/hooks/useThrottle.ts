type ThrottleFunction<T extends (...args: any[]) => any> = {
  (this: ThisParameterType<T>, ...args: Parameters<T>): void;
  cancel: () => void;
};

export function useThrottle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ThrottleFunction<T> {
  let timerId: ReturnType<typeof setTimeout> | undefined;

  const throttledFunc: ThrottleFunction<T> = function (
    this: ThisParameterType<T>,
    ...args: Parameters<T>
  ) {
    if (!timerId) {
      timerId = setTimeout(() => {
        func.apply(this, args);
        timerId = undefined;
      }, delay);
    }
  };

  throttledFunc.cancel = () => {
    if (timerId) {
      clearTimeout(timerId);
      timerId = undefined;
    }
  };

  return throttledFunc;
}
