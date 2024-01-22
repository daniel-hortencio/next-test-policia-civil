const default_timeout = 2000;
let timeoutId: any = null;

export function useDebounce(fn: () => void, timeout: number = default_timeout) {
  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    fn();
  }, timeout);
}
