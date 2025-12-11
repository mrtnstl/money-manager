type StoreNamesType = "projects" | "cashflow" | "reports" | "profiles";

interface Project {
	id: string;
	name: string;
}

type TransactionType = "expense" | "income";

interface Transaction {
	id: string;
	projectId: string;
	name: string;
	value: number;
	type: TransactionType;
	occurred_at: Date; // TODO: or string?
}

class IndexedDB {
	private dbName = "";
	private version = 1;
	private db: IDBDatabase | null = null;

	private open(): Promise<IDBDatabase> {
		return new Promise((resolve, reject) => {
			const request = indexedDB.open(this.dbName, this.version);

			request.onerror = () => reject(request.error);
			request.onsuccess = () => {
				this.db = request.result;
				resolve(this.db);
			};
			request.onupgradeneeded = (event) => {
				const db = (event.target as IDBOpenDBRequest).result;

				if (!db.objectStoreNames.contains("projects")) {
					db.createObjectStore("projects", {
						keyPath: "id",
						autoIncrement: false,
					});
				}
				if (!db.objectStoreNames.contains("cashflow")) {
					const store = db.createObjectStore("cashflow", {
						keyPath: "id",
						autoIncrement: false,
					});
					store.createIndex("occurredAt", "occurredAt", { unique: false });
					store.createIndex("type", "type", { unique: false });
				}
			};
		});
	}

	private async getDB(): Promise<IDBDatabase> {
		if (this.db) return this.db;
		return await this.open();
	}

	async add<T>(
		storeName: StoreNamesType,
		item: Omit<T, "id">
	): Promise<number> {
		const db = await this.getDB();
		return new Promise((resolve, reject) => {
			const tx = db.transaction(storeName, "readwrite");
			const store = tx.objectStore(storeName);
			const request = store.add(item as unknown); // as any?

			request.onerror = () => reject(request.error);
			request.onsuccess = () => resolve(request.result as number);
		});
	}

	async getAll<T>(storeName: StoreNamesType): Promise<T[]> {
		const db = await this.getDB();
		return new Promise((resolve, reject) => {
			const tx = db.transaction(storeName, "readonly");
			const store = tx.objectStore(storeName);
			const request = store.getAll();

			request.onerror = () => reject(request.error);
			request.onsuccess = () => resolve(request.result as T[]);
		});
	}

	async getById<T>(
		storeName: StoreNamesType,
		id: number
	): Promise<T | undefined> {
		const db = await this.getDB();
		return new Promise((resolve, reject) => {
			const tx = db.transaction(storeName, "readonly");
			const store = tx.objectStore(storeName);
			const request = store.get(id);

			request.onerror = () => reject(request.error);
			request.onsuccess = () => resolve(request.result as T);
		});
	}

	async getByIndex<T>(
		storeName: "transactions", // TODO:
		indexName: "projectId" | "occurredAt" | "type",
		value: any
	): Promise<T[]> {
		const db = await this.getDB();
		return new Promise((resolve, reject) => {
			const tx = db.transaction(storeName, "readonly");
			const store = tx.objectStore(storeName);
			const index = store.index(indexName);
			const request = index.getAll(value);

			request.onsuccess = () => resolve(request.result as T[]);
			request.onerror = () => reject(request.error);
		});
	}

	async update<T>(
		storeName: StoreNamesType,
		item: T & { id: number }
	): Promise<void> {
		const db = await this.getDB();
		return new Promise((resolve, reject) => {
			const tx = db.transaction(storeName, "readwrite");
			const store = tx.objectStore(storeName);
			const request = store.put(item as unknown); // as any?

			request.onerror = () => reject(request.error);
			request.onsuccess = () => resolve();
		});
	}

	async delete(storeName: StoreNamesType, id: number): Promise<void> {
		const db = await this.getDB();
		return new Promise((resolve, reject) => {
			const tx = db.transaction(storeName, "readwrite");
			const store = tx.objectStore(storeName);
			const request = store.delete(id);

			request.onerror = () => reject(request.error);
			request.onsuccess = () => resolve();
		});
	}
}

export const db = new IndexedDB();

/*
example calls for later

const projectId = await db.add('projects', { name: 'Freelance' });
await db.add('cashflow', {
  id: projectId,
  name: 'Website project',
  value: 2500,
  type: 'income',
  occurredAt: new Date().toISOString(),
});

const projects = await db.getAll<Project>('projects');
const incomeTxs = await db.getByIndex<Transaction>('cashflow', 'type', 'income');
const projectTxs = await db.getByIndex<Transaction>('cashflow', 'projectId', 1);

await db.update('projects', { id: 1, name: 'Main Freelance' });

await db.delete('cashflow', 5);
*/
