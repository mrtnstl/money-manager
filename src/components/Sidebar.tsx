import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import getLocalization from "../utils/getLocalization";
import type { MenuContent } from "../types/localization.types";
import styles from "../styles/Sidebar.module.css";
import useLocalStorage from "../hooks/useLocalStorage";
import { GearIcon } from "../assets/SCVIcons";
import EditableSelect from "./EditableSelect";

const Sidebar = () => {
	const navigate = useNavigate();
	const [localization, setLocalization] = useState<MenuContent>({});
	const [lang] = useLocalStorage("lang", "en"); // setLang

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
				<EditableSelect />
				{/*projectList ? (
					<select
						id={styles.projectSelector}
						className={styles.navlink}
						name="selectedProject"
					>
						{projectList.map((project) => (
							<option key={project.id} id={project.id} value={project.id}>
								{project.text}
							</option>
						))}
					</select>
				) : (
					<p>{"no project yet"}</p>
				)*/}
				<div>
					<NavLink to={"/"} className={styles.navlink}>
						<li>{localization.home || "home"}</li>
					</NavLink>
					<NavLink to={"/dashboard"} className={styles.navlink}>
						<li>{localization.dashboard || "dashboard"}</li>
					</NavLink>
					<NavLink to={"/projects"} className={styles.navlink}>
						<li>{localization.projects || "projects"}</li>
					</NavLink>
					<NavLink to={"/reports"} className={styles.navlink}>
						<li>{localization.reports || "reports"}</li>
					</NavLink>
					<NavLink to={"/sync"} className={styles.navlink}>
						<li>{localization.sync || "sync"}</li>
					</NavLink>
					<NavLink to={"/howto"} className={styles.navlink}>
						<li>{localization.howto || "howto"}</li>
					</NavLink>
				</div>

				<NavLink to={"/settings"} className={styles.navlink}>
					<li className="linkWithIcon">
						<GearIcon width={50} strokecolor={"#ebebffe5"} />
					</li>
					{/*localization.settings || "settings"*/}
				</NavLink>
			</ul>
		</div>
	);
};

export default Sidebar;
