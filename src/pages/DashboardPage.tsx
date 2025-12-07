import styles from "../styles/Content.module.css";
const DashboardPage = () => {
	return (
		<main id={styles.container}>
			<h1>Dashboard</h1>
			<p>
				This is the dashboard page with graphs about income and spending data
				and spending by category
			</p>
		</main>
	);
};

export default DashboardPage;
