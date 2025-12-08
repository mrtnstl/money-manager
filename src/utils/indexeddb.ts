import type { CashFlow } from "../types/cashflow.types";

export function testIDB({ name, value }: CashFlow): Promise<unknown> {
	return new Promise((resolve, reject) => {
		const request: IDBOpenDBRequest = window.indexedDB.open(
			"MoneyManagerDB",
			1
		);

		request.onerror = (event) => {
			console.log("open req error");
			const error = (event.target as IDBRequest).error;
			if (error) {
				console.log(error.name, error.message);
				reject(`${error.name}: ${error.message}`);
			}
		};
		request.onsuccess = (event: Event) => {
			const db = (event.target as IDBOpenDBRequest).result;
			const successData = {
				type: event.type,
				name: db.name,
				version: db.version,
				objectStoreNames: db.objectStoreNames,
			};
			console.log("open req success");
			console.log(JSON.stringify(successData, null, 4));

			const transaction: IDBTransaction = db.transaction(
				["finances"],
				"readwrite"
			);
			const financesStore: IDBObjectStore = transaction.objectStore("finances");
			transaction.oncomplete = () => {
				console.log("transaction complete!");
			};
			transaction.onerror = () => {
				console.log("transaction error!");
			};
			transaction.onabort = () => {
				console.log("transaction abort!");
			};
			financesStore.add({
				id: crypto.randomUUID(),
				name: name,
				value: value,
			});
			resolve(successData);
		};
		request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
			console.log("open req onupgradeneeded");
			const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;

			const objectStore: IDBObjectStore = db.createObjectStore("finances", {
				keyPath: "id",
			});
			objectStore.createIndex("name", "name", { unique: false }); // (nameOfIndex, nameOfProperty, ...)
			objectStore.add({
				id: crypto.randomUUID(),
				name: "Electricity bill",
				value: 17000,
			});
		};
	});
}

/*
const transaction: IDBTransaction = db.transaction(
    ["finances"],
    "readwrite"
);
const financesStore: IDBObjectStore = transaction.objectStore("finances");

transaction.oncomplete = () => {
    console.log("transaction complete!");
};
transaction.onerror = () => {
    console.log("transaction error!");
};
transaction.onabort = () => {
    console.log("transaction abort!");
};

const request: IDBRequest = financesStore.add({
    id: crypto.randomUUID(),
    name: "Electricity bill",
    value: 17000,
});

// financesStore.put(data)
// financesStore.get("19324324-342cew-1243fcqa4325"); -> request.result.name
// .getAll() -> request.result
request.onsuccess = () => {
    console.log("request success!");
};
request.onerror = () => {
    console.log("request error!");
};

const nameIndex: IDBIndex = objectStore.index("name");
nameIndex.get("Electricity bill").onsuccess = (event) => {
    console.log(
        `Item: ${(event.target as IDBRequest).result.name} ${(event.target as IDBRequest).result.value}`
    );
};

const valueIndex: IDBIndex = objectStore.index("value");
const boundKeyRange: IDBKeyRange = IDBKeyRange.bound(
    5000,
    40000,
    false,
    false
);
valueIndex.openCursor(boundKeyRange).onsuccess = (event) => {
    const cursor: IDBCursorWithValue = (event.target as IDBRequest).result;
    if (cursor) {
        console.log(cursor.value.name + ", value: " + cursor.value.value);
        cursor.continue();
    }
};*/
