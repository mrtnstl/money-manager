import styles from "../styles/Content.module.css";
const HomePage = () => {
	return (
		<main id={styles.container}>
			<h1>Home</h1>
			<p>
				This is the home page whith basic information about the current user. (+
				logout, last login)
			</p>
		</main>
	);
};

export default HomePage;
