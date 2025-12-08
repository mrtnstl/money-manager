import { useState } from "react";
import type { CashFlow } from "../types/cashflow.types";
import { testIDB } from "../utils/indexeddb";
import styles from "../styles/Content.module.css";
import newpage from "../styles/NewPage.module.css";

const NewPage = () => {
	const [spendingData, setSpendingData] = useState<CashFlow>({
		name: "",
		value: 0,
		type: "expense",
		project: "personal",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const target = e.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;
		setSpendingData((values) => ({ ...values, [name]: value }));
	};
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("SUBMIT");

		testIDB(spendingData)
			.then((result) => {
				console.log("SUCCESS", result);
				setSpendingData({ ...spendingData, name: "", value: 0 });
			})
			.catch((err) => {
				console.log("ERROR", err);
			});
	};

	return (
		<main id={styles.container}>
			<h1>New</h1>
			<p>
				This page will provide opportunity for the user to upload their
				financial data including income, spending and monthly allowance. The
				data can be separated by project, for example 'personal' or 'XYZ
				project'
			</p>
			<form id={newpage.cashflowForm} onSubmit={handleSubmit}>
				<span id={newpage.mainInput}>
					<input
						type="text"
						name="name"
						placeholder="item name"
						autoComplete="false"
						value={spendingData.name}
						onChange={handleChange}
					/>
					<input
						type="number"
						name="value"
						autoComplete="false"
						value={spendingData.value}
						onChange={handleChange}
					/>
				</span>
				<span id={newpage.radioGroup}>
					<span className={newpage.radioItem}>
						<input
							type="radio"
							name="type"
							id="typeExpense"
							value="expense"
							checked={spendingData.type === "expense"}
							onChange={handleChange}
						/>
						<label htmlFor="typeExpense">expense</label>
					</span>
					<span>
						<input
							type="radio"
							name="type"
							id="typeIncome"
							value="income"
							checked={spendingData.type === "income"}
							onChange={handleChange}
						/>
						<label htmlFor="typeIncome">income</label>
					</span>
				</span>
				<input type="submit" value={"insert"} id={newpage.submitBtn} />
			</form>
		</main>
	);
};

export default NewPage;
