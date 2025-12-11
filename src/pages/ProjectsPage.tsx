import { useEffect, useState } from "react";
import { db } from "../utils/database";
import type { Cashflow } from "../types/database.types";
import styles from "../styles/Content.module.css";
import projectspage from "../styles/ProjectsPage.module.css";
import AddCashflowForm from "../components/forms/AddCashflowForm";

const ProjectsPage = () => {
	const [storedCashflow, setStoredCashflow] = useState<Cashflow[]>([]);

	useEffect(() => {
		(async () => {
			try {
				const cashflow = await db.getAll<Cashflow>("cashflow");
				const sortedResult = cashflow.sort(
					(a, b) => b.occurredAt - a.occurredAt
				);
				setStoredCashflow(sortedResult);
			} catch (err) {
				console.log((err as Error).message);
			}
		})();
	}, []);

	return (
		<main id={styles.container}>
			<h1>Projects</h1>
			<p>
				Set up a project, admin your cash flow and define your allowance, so you
				can be mindful of your financial footprint.
			</p>
			<AddCashflowForm />

			<div id={projectspage.cashflowList}>
				{storedCashflow &&
					storedCashflow.map((item: Cashflow) => (
						<div key={item.id} className={projectspage.cashflowListItem}>
							<div>
								<p>{item.name}</p>
								<p
									className={
										item.type === "income"
											? projectspage.cashflowIncome
											: projectspage.cashflowExpense
									}
								>
									{(item.type === "income" ? "+" : "-") + item.value + "HUF"}
								</p>
								<p>{new Date(item.occurredAt!).toISOString()}</p>
							</div>
							<div>
								<button type="button">MOD</button>
							</div>
						</div>
					))}
			</div>
		</main>
	);
};

export default ProjectsPage;
