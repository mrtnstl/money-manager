import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import getLocalization from "../utils/getLocalization";
import type { MenuContent } from "../types/localization.types";
import styles from "../styles/Sidebar.module.css";
import useLocalStorage from "../hooks/useLocalStorage";
import { GearIcon } from "../assets/SCVIcons";

const mockProjectListData = [
	{ id: "34j5234f4-18ffh45", text: "personal" },
	{ id: "23f345432-234v3v4", text: "project1" },
	{ id: "884h276dd-6jf3454", text: "the shop" },
];

type ProjectListItem = {
	id: string;
	text: string;
};

const Sidebar = () => {
	const navigate = useNavigate();
	const [localization, setLocalization] = useState<MenuContent>({});
	const [lang] = useLocalStorage("lang", "en"); // setLang
	const [projectList, setProjectList] = useState<ProjectListItem[]>();

	useEffect(() => {
		console.log(localStorage.getItem("lang"));
		getLocalization(lang, "sidebar")
			.then((response) => setLocalization(response))
			.catch((err) => console.log(err));
	}, [lang]);
	useEffect(() => {
		(() => {
			setProjectList(mockProjectListData);
		})();
	}, []);
	return (
		<div id={styles.container}>
			<h2 id={styles.title} onClick={() => navigate("/", { replace: true })}>
				{localization.title || "money manager"}
			</h2>
			<ul>
				{/*<input type="text" className={styles.navlink} />*/}
				{projectList ? (
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
				)}
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
