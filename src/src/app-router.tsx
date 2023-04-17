import Layout from "components/layout/layout";
import NotFoundPage from "pages/not-found/not-found";
import HomePage from "pages/home/home";
import SettingsPage from "pages/settings/settings";
import { createBrowserRouter } from "react-router-dom";
import TestPage from "pages/test/test";

const AppRouter = () =>
	createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			errorElement: <Layout outlet={<NotFoundPage />} />,
			children: [
				{
					index: true,
					element: <HomePage />,
					handle: {
						title: () => "Home",
					},
				},
				{
					path: "settings",
					element: <SettingsPage />,
					handle: {
						title: () => "Settings",
					},
					children: [
						{
							path: "test",
							element: <TestPage />,
							handle: {
								title: () => "Test",
							},
						},
					],
				},
			],
		},
	]);

export default AppRouter;
