import { useState } from "react";
import type { CashFlow } from "../types/cashflow.types";
import { testIDB } from "../utils/indexeddb";
import styles from "../styles/Content.module.css";

const NewPage = () => {
	const [spendingData, setSpendingData] = useState<CashFlow>({
		name: "",
		value: 0,
		type: "expense",
	});

	const handleTestDBClick = () => {
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
				financial data including income, spending and monthly allowance
			</p>
			<input
				type="text"
				name="name"
				placeholder="item name"
				value={spendingData.name}
				onChange={(e) =>
					setSpendingData({ ...spendingData, name: e.target.value })
				}
			/>
			<input
				type="number"
				name="value"
				value={spendingData.value}
				onChange={(e) =>
					setSpendingData({ ...spendingData, value: parseInt(e.target.value) })
				}
			/>
			<button onClick={() => handleTestDBClick()}>test db</button>
		</main>
	);
};

export default NewPage;
