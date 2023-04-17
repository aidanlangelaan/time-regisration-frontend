import { Outlet } from "react-router-dom";
import LayoutHeader from "./header/header";
import SetPageTitle from "hooks/set-page-title";
import LayoutSidebar from "./sidebar/sidebar";

interface ILayout {
	outlet?: any;
}

export default function Layout(props: ILayout): JSX.Element {
	return (
		<div>
			<SetPageTitle />
			<LayoutHeader />
			<div>
				<LayoutSidebar />
				{/* hack to allow error page be rendered inside the layout
            		https://github.com/remix-run/react-router/discussions/9553#discussioncomment-4907035 */}
				<div id="page-content">{props.outlet ? props.outlet : <Outlet />}</div>
			</div>
		</div>
	);
}
