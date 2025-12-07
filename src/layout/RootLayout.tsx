import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
	return (
		<section>
			<Sidebar />
			<Outlet />
		</section>
	);
};

export default RootLayout;
