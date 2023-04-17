import Layout from "components/layout/layout";
import NotFoundPage from "pages/not-found/not-found";
import HomePage from "pages/home/home";
import SettingsPage from "pages/settings/settings";
import TestPage from "pages/test/test";
import { RouteObject } from "react-router-dom";
import ProjectListPage from "pages/project/project-list";

const AppRoutes = (): RouteObject[] => [
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
				handle: {
					title: () => "Settings",
				},
				children: [
					{
						index: true,
						element: <SettingsPage />,
					},
					{
						path: "test",
						element: <TestPage />,
						handle: {
							title: () => "Test",
						},
					},
				],
			},
			{
				path: "projects",
				element: <ProjectListPage />,
				handle: {
					title: () => "Projects",
				},
			},
		],
	},
];
export default AppRoutes;
