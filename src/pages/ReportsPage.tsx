import { Link } from "react-router";
import styles from "../styles/Content.module.css";
import reportspage from "../styles/ReportsPage.module.css";

const ReportsPage = () => {
	return (
		<main id={styles.container}>
			<h1>Reports</h1>
			<p>
				This is the reports page. The user will be able to export their data,
				primarily in .csv.
			</p>
			<div id={reportspage.exportIconContainer}>
				<Link to={"/"}> .csv</Link>
				<Link to={"/"}> .png</Link>
				<Link to={"/"}> email</Link>
			</div>
			<p>TODO: reports plus 'export report' func</p>
		</main>
	);
};

export default ReportsPage;
