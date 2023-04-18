import { Folder24Regular, Home24Regular } from "@fluentui/react-icons";

import HomePage from "pages/home/home";
import Layout from "components/layout/layout";
import NotFoundPage from "pages/not-found/not-found";
import ProjectListPage from "pages/project/project-list";
import { RouteObject } from "react-router-dom";
import SettingsPage from "pages/settings/settings";
import TestPage from "pages/test/test";

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
					icon: () => <Home24Regular />,
					displayInSidebar: true,
				},
			},
			{
				path: "settings",
				handle: {
					title: () => "Settings",
					displayInSidebar: false,
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
					icon: () => <Folder24Regular />,
					displayInSidebar: true,
				},
			},
		],
	},
];
export default AppRoutes;
