import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import getLocalization from "../utils/getLocalization";
import type { MenuContent } from "../types/localization.types";
import styles from "../styles/Sidebar.module.css";
import useLocalStorage from "../hooks/useLocalStorage";

const Sidebar = () => {
	const navigate = useNavigate();
	const [localization, setLocalization] = useState<MenuContent>({});
	const [lang, setLang] = useLocalStorage("lang", "en");

	useEffect(() => {
		console.log(localStorage.getItem("lang"));
		getLocalization(lang, "sidebar")
			.then((response) => setLocalization(response))
			.catch((err) => console.log(err));
	}, [lang]);

	return (
		<div id={styles.container}>
			<h2 id={styles.title} onClick={() => navigate("/", { replace: true })}>
				{localization.title || "money manager"}
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
				<NavLink to={"/exports"} className={styles.navlink}>
					<li>{localization.exports || "exports"}</li>
				</NavLink>
				<NavLink to={"/settings"} className={styles.navlink}>
					<li>{localization.settings || "settings"}</li>
				</NavLink>
			</ul>
		</div>
	);
};

export default Sidebar;
