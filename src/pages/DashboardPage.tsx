import { lazy, Suspense } from "react";
//import ExpensesChart from "../components/charts/ExpensesChart";
//import ViewsChart from "../components/charts/ViewsChart";
//import PopularityChart from "../components/charts/PopularityChart";
import PreviousViewSection from "../components/PreviousViewSection";
import styles from "../styles/Content.module.css";

const financialData = [
	/*{ date: 20251112, expense: 82, income: 0 },
	{ date: 20251113, expense: 124, income: 0 },
	{ date: 20251114, expense: 67, income: 850 },
	{ date: 20251115, expense: 195, income: 0 },
	{ date: 20251116, expense: 43, income: 0 },
	{ date: 20251117, expense: 91, income: 0 },
	{ date: 20251118, expense: 156, income: 1200 },
	{ date: 20251119, expense: 38, income: 0 },
	{ date: 20251120, expense: 210, income: 0 },
	{ date: 20251121, expense: 74, income: 320 },
	{ date: 20251122, expense: 167, income: 0 },
	{ date: 20251123, expense: 51, income: 0 },
	{ date: 20251124, expense: 89, income: 0 },
	{ date: 20251125, expense: 134, income: 680 },*/
	{ date: 20251126, expense: 97, income: 0 },
	{ date: 20251127, expense: 221, income: 0 },
	{ date: 20251128, expense: 63, income: 0 },
	{ date: 20251129, expense: 178, income: 950 },
	{ date: 20251130, expense: 45, income: 0 },
	{ date: 20251201, expense: 112, income: 0 },
	{ date: 20251202, expense: 88, income: 420 },
	{ date: 20251203, expense: 201, income: 0 },
	{ date: 20251204, expense: 76, income: 0 },
	{ date: 20251205, expense: 159, income: 1100 },
	{ date: 20251206, expense: 94, income: 0 },
	{ date: 20251207, expense: 67, income: 0 },
	{ date: 20251208, expense: 183, income: 0 },
	{ date: 20251209, expense: 55, income: 290 },
	{ date: 20251210, expense: 141, income: 0 },
	{ date: 20251211, expense: 99, income: 0 },
];

const linesA = [
	{ type: "monotone", dataKey: "income", stroke: "#3de62eff", strokeWidth: 2 },
	{ type: "monotone", dataKey: "expense", stroke: "#e72a2aff", strokeWidth: 2 },
];
const linesB = [
	{ type: "basis", dataKey: "income", stroke: "#2ee693ff", strokeWidth: 2 },
	{
		type: "basis",
		dataKey: "expense",
		stroke: "#d96b6bff",
		strokeWidth: 2,
	},
];
const linesC = [
	{
		type: "bump",
		dataKey: "income",
		stroke: "#4e67f5ff",
		strokeWidth: 2,
	},
	{
		type: "bump",
		dataKey: "expense",
		stroke: "#ec4eb5ff",
		strokeWidth: 2,
	},
];

const PopularityChart = lazy(
	() => import("../components/charts/PopularityChart")
);

const DashboardPage = () => {
	return (
		<main id={styles.container}>
			<h1>Dashboard</h1>
			<PreviousViewSection />
			<p>
				This is the dashboard page with graphs about income and spending data
				and spending by category
			</p>
			<Suspense fallback={<p>Loading...</p>}>
				<PopularityChart
					width={400}
					height={200}
					data={financialData}
					lines={linesA}
					xAxisKey="date"
				/>
			</Suspense>
			<Suspense fallback={<p>Loading...</p>}>
				<PopularityChart
					width={400}
					height={200}
					data={financialData}
					lines={linesB}
					xAxisKey="date"
				/>
			</Suspense>
			<Suspense fallback={<p>Loading...</p>}>
				<PopularityChart
					width={400}
					height={200}
					data={financialData}
					lines={linesC}
					xAxisKey="date"
				/>
			</Suspense>
			{/*<ExpensesChart />
			<ViewsChart />*/}
		</main>
	);
};

export default DashboardPage;
