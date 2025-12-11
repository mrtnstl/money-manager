import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import ProjectsPage from "./pages/ProjectsPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";
import NotFoundPage from "./pages/NotFoundPage";
import SyncPage from "./pages/SyncPage";
import HowToPage from "./pages/HowToPage";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path={"/"} element={<RootLayout />}>
				<Route index element={<HomePage />} />
				<Route path={"dashboard"} element={<DashboardPage />} />
				<Route path={"projects"} element={<ProjectsPage />} />
				<Route path={"reports"} element={<ReportsPage />} />
				<Route path={"sync"} element={<SyncPage />} />
				<Route path={"howto"} element={<HowToPage />} />
				<Route path={"settings"} element={<SettingsPage />} />
				<Route path={"*"} element={<NotFoundPage />} />
			</Route>
		)
	);
	return <RouterProvider router={router} />;
}

export default App;
