import { useEffect, useState } from "react";

export function useDebouncedValue(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    
    useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
  
      return () => {
        clearTimeout(timer);  // Освобождаем таймер
      };
    }, [value, delay]);
  
    return debouncedValue;
  }