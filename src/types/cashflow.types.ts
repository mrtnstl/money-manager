/**
 * types related to cash flow, like expense, income, allowance
 */
export type CashFlow = {
	name: string;
	value: number;
	type: "expense" | "income";
	category?: string;
	timestamp?: Date;
};
