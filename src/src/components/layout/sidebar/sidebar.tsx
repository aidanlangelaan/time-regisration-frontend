import "./sidebar.style.scss";

import { Link, RouteObject, useLocation } from "react-router-dom";

import AppRoutes from "global/routes";

interface INavigationRoutes {
	id: string;
	path: string;
	title: string;
	icon: JSX.Element;
	children?: INavigationRoutes[];
}

export default function LayoutSidebar(props: { menuMode: string }): JSX.Element {
	const { menuMode } = props;
	const routes = AppRoutes()[0].children as RouteObject[];

	const getRoutes = (routes: RouteObject[]): INavigationRoutes[] => {
		return routes
			.filter((route) => Boolean((route.handle as any)?.title))
			.filter((route) => Boolean((route.handle as any)?.displayInSidebar))
			.map((route) => {
				const mappedRoute = {
					id: route.id,
					path: route.path,
					title: (route.handle as any).title(),
					icon: (route.handle as any).icon(),
					children: [],
				} as INavigationRoutes;

				if (route.children) mappedRoute.children = getRoutes(route.children);

				return mappedRoute;
			});
	};

	return (
		<div id="sidebar" className={menuMode}>
			<ul>
				{getRoutes(routes).map((route) => {
					const currentLocation = useLocation();
					const path = "/" + (route.path || "");
					const className = currentLocation.pathname.split("/")[1] === path.split("/")[1] ? "active" : "";

					return (
						<li key={route.id}>
							<Link to={path} className={className}>
								<span className="menu-icon">{route.icon}</span>
								<span className="menu-text">{route.title}</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
