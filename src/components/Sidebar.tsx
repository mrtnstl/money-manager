import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import getLocalization from "../utils/getLocalization";
import styles from "../styles/Sidebar.module.css";

const Sidebar = () => {
	const navigate = useNavigate();
	const [localization, setLocalization] = useState({});

	useEffect(() => {
		getLocalization("en", "sidebar")
			.then((response) => setLocalization(response))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div id={styles.container}>
			<h2 id={styles.title} onClick={() => navigate("/", { replace: true })}>
				{localization.title || "mm"}
			</h2>
			<ul>
				<NavLink to={"/"} className={styles.navlink}>
					<li>{localization.home || "home"}</li>
				</NavLink>
				<NavLink to={"/dashboard"} className={styles.navlink}>
					<li>{localization.dashboard || "dashboard"}</li>
				</NavLink>
				<NavLink to={"/new"} className={styles.navlink}>
					<li>{localization.new || "new"}</li>
				</NavLink>
				<NavLink to={"/reports"} className={styles.navlink}>
					<li>{localization.reports || "reports"}</li>
				</NavLink>
				<NavLink to={"/settings"} className={styles.navlink}>
					<li>{localization.settings || "settings"}</li>
				</NavLink>
			</ul>
		</div>
	);
};

export default Sidebar;
