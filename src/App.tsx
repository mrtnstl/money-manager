import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import NewPage from "./pages/NewPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path={"/"} element={<RootLayout />}>
				<Route index element={<HomePage />} />
				<Route path={"dashboard"} element={<DashboardPage />} />
				<Route path={"new"} element={<NewPage />} />
				<Route path={"reports"} element={<ReportsPage />} />
				<Route path={"settings"} element={<SettingsPage />} />
				<Route path={"*"} element={<NotFoundPage />} />
			</Route>
		)
	);
	return <RouterProvider router={router} />;
}

export default App;
