import { useEffect, type ChangeEvent } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import styles from "../styles/Content.module.css";

const SettingsPage = () => {
	const [lang, setLang] = useLocalStorage("lang", "en");

	useEffect(() => {}, []);

	const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
		e.preventDefault();
		console.log("lang:", lang);
		const newLang = e.target.value;
		setLang(newLang);
	};

	return (
		<main id={styles.container}>
			<h1>Settings</h1>
			<p>
				This is the settings page. TODO: I'll have to come up with the settings
				users can set
			</p>
			<form action="">
				<select name="" id="" onChange={handleChange}>
					<option value="en">english</option>
					<option value="hu">hungarian</option>
				</select>
			</form>
			<p>TODO: store settings in IDB, sync with options slice</p>
		</main>
	);
};

export default SettingsPage;
