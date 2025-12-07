import styles from "../styles/Sidebar.module.css";

const Sidebar = () => {
	return (
		<div id={styles.container}>
			<h2>money manager</h2>
			<ul>
				<li>Dashboard</li>
				<li>New</li>
				<li>Reports</li>
				<li>Settings</li>
			</ul>
		</div>
	);
};

export default Sidebar;
