import { useEffect, useState } from 'react';

// wait for user to stop typing before returning search results to avoid reusing api calls
function useDebounce<T>(value: T, delay?: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => {
        clearTimeout(timer) // on unmount clear timeout to avoid overflow
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce