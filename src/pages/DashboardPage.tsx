import ExpensesChart from "../components/charts/ExpensesChart";
import PopularityChart from "../components/charts/PopularityChart";
import ViewsChart from "../components/charts/ViewsChart";
import PreviousViewSection from "../components/PreviousViewSection";
import styles from "../styles/Content.module.css";
const DashboardPage = () => {
	return (
		<main id={styles.container}>
			<h1>Dashboard</h1>
			<PreviousViewSection />
			<p>
				This is the dashboard page with graphs about income and spending data
				and spending by category
			</p>
			<PopularityChart />
			<ExpensesChart />
			<ViewsChart />
		</main>
	);
};

export default DashboardPage;
