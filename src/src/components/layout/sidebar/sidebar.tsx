import { Link, RouteObject, useLocation } from "react-router-dom";
import "./sidebar.style.scss";
import AppRoutes from "global/routes";

interface INavigationRoutes {
	id: string;
	path: string;
	title: string;
	children?: INavigationRoutes[];
}

export default function LayoutSidebar(): JSX.Element {
	const routes = AppRoutes()[0].children as RouteObject[];

	const getRoutes = (routes: RouteObject[]): INavigationRoutes[] => {
		return routes
			.filter((route) => Boolean((route.handle as any)?.title))
			.map((route) => {
				const mappedRoute = {
					id: route.id,
					path: route.path,
					title: (route.handle as any).title(),
					children: [],
				} as INavigationRoutes;

				if (route.children) mappedRoute.children = getRoutes(route.children);

				return mappedRoute;
			});
	};

	return (
		<ul>
			{getRoutes(routes).map((route) => {
				const currentLocation = useLocation();
				const path = "/" + (route.path || "");
				const className = currentLocation.pathname.split("/")[1] === path.split("/")[1] ? "active" : "";

				return (
					<li key={route.id}>
						<Link to={path} className={className}>
							{route.title}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
