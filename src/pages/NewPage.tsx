import styles from "../styles/Content.module.css";
const NewPage = () => {
	return (
		<main id={styles.container}>
			<h1>New</h1>
			<p>
				This page will provide opportunity for the user to upload their
				financial data including income, spending and monthly allowance
			</p>
		</main>
	);
};

export default NewPage;
