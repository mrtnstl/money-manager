import { useEffect, useState } from "react";

function useLocalStorage(key: string, initial: string) {
	const [state, setState] = useState<string>(initial);

	useEffect(() => {
		const currentStored = localStorage.getItem(key);
		(async () => {
			if (currentStored) {
				setState(currentStored);
			} else {
				localStorage.setItem(key, initial);
			}
		})();
	}, []);

	const updateItem = (value: string) => {
		localStorage.setItem(key, value);
		setState(value);
	};

	return [state, updateItem] as const;
}

export default useLocalStorage;
