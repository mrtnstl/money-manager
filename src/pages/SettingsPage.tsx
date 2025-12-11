import styles from "../styles/Content.module.css";

const SettingsPage = () => {
	return (
		<main id={styles.container}>
			<h1>Settings</h1>
			<p>
				This is the settings page. TODO: I'll have to come up with the settings
				users can set
			</p>
			<form action="">
				<select name="" id="">
					<option value="en">english</option>
					<option value="hu">hungarian</option>
				</select>
			</form>
			<p>TODO: store settings in IDB, sync with options slice</p>
		</main>
	);
};

export default SettingsPage;
