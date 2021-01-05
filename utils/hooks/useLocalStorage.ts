import { useState } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T): (T | ((value: T | ((val: T) => T)) => void))[] => {
	const [storedValue, setStoredValue] = useState<T>(() => {
		try {
			if (typeof window !== "undefined") {
				const item = window.localStorage.getItem(key);
				return item ? JSON.parse(item) : initialValue;
			} else return initialValue;
		} catch (error) {
			console.warn(error);
			return initialValue;
		}
	});

	const setValue = (value: T | ((val: T) => T)) => {
		try {
			const valueToStore = value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			if (typeof window !== "undefined") window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			console.warn(error);
		}
	};

	return [storedValue, setValue];
};
