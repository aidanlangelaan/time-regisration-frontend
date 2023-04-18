import LayoutHeader from "./header/header";
import LayoutSidebar from "./sidebar/sidebar";
import { Outlet } from "react-router-dom";
import SetPageTitle from "hooks/set-page-title";
import localforage from "localforage";
import { useState } from "react";

interface ILayout {
	outlet?: any;
}

export default function Layout(props: ILayout): JSX.Element {
	const [menuMode, setmenuMode] = useState("");
	localforage.getItem("menuMode").then((value) => {
		if (value) setmenuMode(value as string);
	});

	const toggleMenuMode = () => {
		const mode = menuMode == "collapsed" ? "open" : "collapsed";
		localforage.setItem("menuMode", mode);
		setmenuMode(mode);
	};

	return (
		<div>
			<SetPageTitle />
			<LayoutHeader onMenuButtonClick={toggleMenuMode} />
			<div id="content" className="flex-container">
				<LayoutSidebar menuMode={menuMode} />
				{/* hack to allow error page be rendered inside the layout
            		https://github.com/remix-run/react-router/discussions/9553#discussioncomment-4907035 */}
				<div id="page-content">{props.outlet ? props.outlet : <Outlet />}</div>
			</div>
		</div>
	);
}
