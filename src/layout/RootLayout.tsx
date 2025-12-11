import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";

const RootLayout = () => {
	return (
		<section>
			<Sidebar />
			<Outlet />
		</section>
	);
};

export default RootLayout;
