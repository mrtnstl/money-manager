/*
    types related to database entities
*/
export type StoreNamesType = "projects" | "cashflow" | "reports" | "profiles";

export interface Profile {
	id: string;
	name: string;
}

type LangType = "en" | "hu";
export interface Project {
	id: string;
	name: string;
	profileId: string;
	lang: LangType;
	primaryClr?: string;
}

type CashflowTypeType = "expense" | "income";
export interface Cashflow {
	id: string;
	projectId: string;
	name: string;
	value: number;
	type: CashflowTypeType;
	occurredAt: number;
}

export interface Report {
	id: string;
	projectId: string;
	createdAt: number;
	result: string; // report results will be converted to string
}
