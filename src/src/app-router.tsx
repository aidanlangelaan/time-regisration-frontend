import Layout from "components/layout/layout";
import NotFoundPage from "pages/NotFound/not-found";
import HomePage from "pages/home/home";
import SettingsPage from "pages/settings/settings";
import { createBrowserRouter } from "react-router-dom";

const AppRouter = () =>
	createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			errorElement: <Layout outlet={<NotFoundPage />} />,
			children: [
				{ index: true, element: <HomePage /> },
				{ path: "settings", element: <SettingsPage /> },
			],
		},
	]);

export default AppRouter;
