import styles from "../styles/Content.module.css";
const ReportsPage = () => {
	return (
		<main id={styles.container}>
			<h1>Reports</h1>
			<p>
				This is the reports page. The user will be able to export their data,
				primarily in .csv.
			</p>
		</main>
	);
};

export default ReportsPage;
