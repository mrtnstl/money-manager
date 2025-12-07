import { NavLink, useNavigate } from "react-router-dom";
import styles from "../styles/Sidebar.module.css";

const Sidebar = () => {
	const navigate = useNavigate();
	return (
		<div id={styles.container}>
			<h2 id={styles.title} onClick={() => navigate("/", { replace: true })}>
				money manager
			</h2>
			<ul>
				<NavLink to={"/"} className={styles.navlink}>
					<li>Home</li>
				</NavLink>
				<NavLink to={"/dashboard"} className={styles.navlink}>
					<li>Dashboard</li>
				</NavLink>
				<NavLink to={"/new"} className={styles.navlink}>
					<li>New</li>
				</NavLink>
				<NavLink to={"/reports"} className={styles.navlink}>
					<li>Reports</li>
				</NavLink>
				<NavLink to={"/settings"} className={styles.navlink}>
					<li>Settings</li>
				</NavLink>
			</ul>
		</div>
	);
};

export default Sidebar;
