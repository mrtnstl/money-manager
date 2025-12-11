import { useState } from "react";
import type { Cashflow } from "../../types/database.types";
import { db } from "../../utils/database";
import projectspage from "../../styles/ProjectsPage.module.css";

const AddCashflowForm = () => {
	const [cashflowData, setCashflowData] = useState<Cashflow>({
		id: "",
		projectId: "PROJECT_ID",
		name: "",
		value: 0,
		type: "expense",
		occurredAt: 0,
	});
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const target = e.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;
		setCashflowData((values) => ({ ...values, [name]: value }));
	};
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		console.log("SUBMIT");
		try {
			await db.add("cashflow", {
				...cashflowData,
				id: crypto.randomUUID(),
				occurredAt: Date.now(),
			});
		} catch (err) {
			console.log((err as Error).message);
		}
	};
	return (
		<form id={projectspage.cashflowForm} onSubmit={handleSubmit}>
			<span id={projectspage.mainInput}>
				<input
					type="text"
					name="name"
					placeholder="item name"
					autoComplete="false"
					value={cashflowData.name}
					onChange={handleChange}
				/>
				<input
					type="number"
					name="value"
					autoComplete="false"
					value={cashflowData.value}
					onChange={handleChange}
				/>
			</span>
			<span id={projectspage.radioGroup}>
				<span className={projectspage.radioItem}>
					<input
						type="radio"
						name="type"
						id="typeExpense"
						value="expense"
						checked={cashflowData.type === "expense"}
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
						checked={cashflowData.type === "income"}
						onChange={handleChange}
					/>
					<label htmlFor="typeIncome">income</label>
				</span>
			</span>
			<input type="submit" value={"insert"} id={projectspage.submitBtn} />
		</form>
	);
};

export default AddCashflowForm;
