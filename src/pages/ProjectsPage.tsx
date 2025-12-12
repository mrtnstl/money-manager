import { useEffect, useState } from "react";
import { db } from "../utils/database";
import type { Cashflow } from "../types/database.types";
import { PenIcon, BinIcon } from "../assets/SCVIcons";
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

	const handleDelete = async (id: string) => {
		console.log(id);
		try {
			await db.delete("cashflow", id);
			console.log(`Record deleted successfuly`);
		} catch (err) {
			console.log((err as Error).message);
		}
	};
	const handleModification = (id: string) => {
		// TODO: trigger popover form
		console.log(`mod record ${id}`);
	};
	return (
		<main id={styles.container}>
			<section id={projectspage.controlsSection}>
				<h1>Projects</h1>
				<p>
					Set up a project, admin your cash flow and define your allowance, so
					you can be mindful of your financial footprint.
				</p>
				<AddCashflowForm />
			</section>

			<div id={projectspage.cashflowList}>
				{storedCashflow &&
					storedCashflow.map((item: Cashflow) => (
						<div key={item.id} className={projectspage.cashflowListItem}>
							<div className={projectspage.dataSection}>
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
								<p>
									{new Date(item.occurredAt!)
										.toISOString()
										.split("T")[0]
										.replaceAll("-", " ")}
								</p>
							</div>
							<div className={projectspage.cashflowRecordControls}>
								<button
									type="button"
									className={projectspage.controlButton}
									onClick={() => handleModification(item.id)}
								>
									<PenIcon height={30} width={30} strokecolor="#12113a" />
								</button>
								<button
									type="button"
									className={projectspage.controlButton}
									onClick={() => handleDelete(item.id)}
								>
									<BinIcon width={30} height={30} strokecolor="#db2a2aff" />
								</button>
							</div>
						</div>
					))}
			</div>
		</main>
	);
};

export default ProjectsPage;
