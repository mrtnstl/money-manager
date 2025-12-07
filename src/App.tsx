import "./components/Sidebar";
import Sidebar from "./components/Sidebar";
import styles from "./styles/Main.module.css";

function App() {
	return (
		<section>
			<Sidebar />
			<main id={styles.container}>
				<h1>Main Section</h1>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
					quisquam totam nostrum aut dicta eaque magnam quae accusantium quam
					voluptates dolores, quasi voluptatem cupiditate maiores quidem vel
					obcaecati minus! Nostrum?
				</p>
			</main>
		</section>
	);
}

export default App;
