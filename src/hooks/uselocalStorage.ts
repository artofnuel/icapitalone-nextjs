import { useState, useEffect } from 'react';

/**
 * Custom hook to manage localStorage state
 * @param key - The key under which the value should be stored
 * @param initialValue - The initial value to be stored (default value)
 * @returns An array with the current value and a function to update it
 */
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  // State to store the value
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error getting localStorage item ${key}:`, error);
      return initialValue;
    }
  });

  // useEffect to update localStorage when the state changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(key, JSON.stringify(storedValue));
      } catch (error) {
        console.error(`Error setting localStorage item ${key}:`, error);
      }
    }
  }, [key, storedValue]);

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
    } catch (error) {
      console.error(`Error setting value for ${key}:`, error);
    }
  };

  const removeItem = () => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(key);
        setStoredValue(initialValue);
      } catch (error) {
        console.error(`Error removing localStorage item ${key}:`, error);
      }
    }
  };

  return [storedValue, setValue, removeItem] as const;
};
