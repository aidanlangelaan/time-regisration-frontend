import { Folder24Regular, Board24Regular } from "@fluentui/react-icons";

import Layout from "components/layout/layout";
import NotFoundPage from "pages/not-found/not-found";
import ProjectListPage from "pages/project/project-list";
import { RouteObject } from "react-router-dom";
import SettingsPage from "pages/settings/settings";
import TestPage from "pages/test/test";
import DashboardPage from "pages/dashboard/dashboard";

const AppRoutes = (): RouteObject[] => [
	{
		path: "/",
		element: <Layout />,
		errorElement: <Layout outlet={<NotFoundPage />} />,
		children: [
			{
				index: true,
				element: <DashboardPage />,
				handle: {
					title: () => "Dashboard",
					icon: () => <Board24Regular />,
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
